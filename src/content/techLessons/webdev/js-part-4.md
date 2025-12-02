---
layout: ../../../layouts/TechLessonLayout.astro
title: "JAVASCRIPT: FROM ZERO TO HERO"
description: "Part 4: Asynchronous JavaScript (Deep Dive)"
pubDate: "2025-12-02"
category: "webdev"
level: "basics"
# heroImage: "/images/my-image.png"  
updatedDate: "2025-12-02"
---

##  JavaScript: Part 4 - Asynchronous JavaScript (Deep Dive)

Welcome to Part 4. This is the turning point in your journey.

In Parts 1-3, we wrote code that was **Synchronous**.

  * **Synchronous** means "one at a time." Line 1 finishes, then Line 2 starts.
  * **Asynchronous** means "in the background." You start a task, move on to the next line, and come back to the first task when it's done.

Why does this matter?
Imagine a website where clicking "Login" freezes the entire screen for 5 seconds while it talks to the database. You couldn't scroll, click, or even close the tab. That is **Synchronous** behavior. We want **Asynchronous** behavior: the user can keep browsing while the login happens in the background.

-----

### Module 13: How JavaScript Works (The Event Loop)

Before writing code, you need to understand the engine.

JavaScript is **Single-Threaded**. This means it has only one "brain" (the Call Stack). It can literally only do **one thing at a time**.

So how does it handle a timer or a network request without freezing? It cheats. It hands those tasks off to the browser (the Web APIs).

1.  **Call Stack:** Runs your JS code (variables, loops).
2.  **Web APIs:** Handles the slow stuff (timers, fetch requests, DOM events).
3.  **Queue:** When the slow stuff is done, it waits here.
4.  **The Event Loop:** This is the gatekeeper. It constantly checks: *"Is the Call Stack empty?"* If yes, it moves the item from the Queue to the Stack.

**Demonstration:**

```javascript
console.log("1. Start");

// This is handed to the browser API. It does NOT pause the code here.
setTimeout(() => {
  console.log("2. Timer Done");
}, 0); // Even with 0ms delay!

console.log("3. End");
```

**Output:**

```text
1. Start
3. End
2. Timer Done
```

*Wait, why?* Because `setTimeout` goes to the Queue. The Event Loop waits for the main code ("3. End") to finish before checking the Queue.

-----

### Module 14: The Old Way (Callbacks)

A **Callback** is simply a function you pass to another function to be executed later.

#### The Scenario: Logging In

Imagine we need to:

1.  Login user (2 seconds)
2.  Get their user ID.
3.  Get their recent posts using that ID.

<!-- end list -->

```javascript
// Simulating a fake server
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("User logged in!");
    // We pass the data back through the callback function
    callback({ userEmail: email }); 
  }, 2000);
}

function getUserPosts(email, callback) {
  setTimeout(() => {
    console.log("Posts retrieved!");
    callback(["Post 1", "Post 2"]);
  }, 1000);
}
```

#### The Problem: Callback Hell

To do these in order, we have to nest them inside each other.

```javascript
console.log("Start Login...");

loginUser("owais@gmail.com", "1234", (user) => {
  console.log(user.userEmail);
  
  // Now that we are logged in, get posts
  getUserPosts(user.userEmail, (posts) => {
    console.log("Here are the posts: ", posts);
    
    // If we needed to get comments on the posts, we'd nest AGAIN here...
  });
});

console.log("End");
```

This "sideways pyramid" shape makes code hard to read and debug.

-----

### Module 15: The Modern Standard (Promises)

A **Promise** is an object that acts as a placeholder. It says: *"I don't have the data yet, but I promise to give you either the Data (Success) or an Error (Failure) later."*

#### 15.1 The Lifecycle of a Promise

A Promise can be in one of three states:

1.  **Pending:** Initial state, neither fulfilled nor rejected.
2.  **Fulfilled (Resolved):** The operation completed successfully.
3.  **Rejected:** The operation failed.

#### 15.2 Creating a Promise

Let's rewrite our Login function using a Promise.

```javascript
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "owais@gmail.com") {
        // SUCCESS: We call resolve with the data
        resolve({ userEmail: email });
      } else {
        // FAILURE: We call reject with an error
        reject(new Error("Invalid email!"));
      }
    }, 2000);
  });
}
```

#### 15.3 Consuming a Promise (`.then` and `.catch`)

We don't use callbacks anymore. We "chain" instructions.

```javascript
loginUser("owais@gmail.com", "1234")
  .then((userData) => {
    console.log("Success:", userData);
    // You can return ANOTHER promise here to chain them
  })
  .catch((error) => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("This runs no matter what (good for cleaning up loading spinners)");
  });
```

-----

### Module 16: The "Gold Standard" (Async / Await)

Promises are great, but chaining `.then()` can still look messy.
**Async/Await** (introduced in ES8) is built *on top* of Promises. It lets you write async code that reads like normal, top-to-bottom synchronous code.

#### 16.1 The Syntax

  * **`async`**: Put this in front of a function to unlock the `await` keyword.
  * **`await`**: Put this in front of a Promise. It pauses the function execution until the Promise resolves.

<!-- end list -->

```javascript
// NOTE: We wrap this in a function because we can't use 'await' at the top level in old browsers
async function startApp() {
  
  console.log("Process started...");

  // The code effectively PAUSES here for 2 seconds
  // But it does NOT freeze the browser
  const user = await loginUser("owais@gmail.com", "1234");
  
  console.log("User is:", user);
  
  console.log("Process ended.");
}

startApp();
```

#### 16.2 Handling Errors (`try` / `catch`)

In `.then()`, we used `.catch()`. In Async/Await, we use a standard `try...catch` block. This is how professional code looks.

```javascript
async function startApp() {
  try {
    const user = await loginUser("wrong@gmail.com", "1234");
    console.log("Logged in!");
  } catch (error) {
    // If the promise rejects, the code jumps here immediately
    console.log("Login Failed:", error.message);
  }
}
```

-----

### Module 17: Working with APIs (Fetch & JSON)

Now we apply this to the real world. We use the **Fetch API** to talk to servers.

#### 17.1 What is JSON?

Servers don't send JavaScript Objects; they send **Text**.
**JSON (JavaScript Object Notation)** is a format that looks like a JS object but is actually a string.

  * `JSON.stringify(obj)`: Converts JS Object -\> JSON String (for sending).
  * `JSON.parse(json)`: Converts JSON String -\> JS Object (for reading).

#### 17.2 The `fetch()` function

`fetch` returns a Promise.

**Example: A Real Weather Request**

```javascript
async function getWeather() {
  try {
    // 1. Send the request (Get the raw envelope)
    // This is 'await' #1 because network requests take time
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London");

    // 2. Check if the response was successful (Status 200)
    if (!response.ok) {
      throw new Error("Could not find that city");
    }

    // 3. Parse the JSON (Open the envelope)
    // This is 'await' #2 because reading the body stream takes time
    const data = await response.json();

    console.log(`The temp in ${data.location.name} is ${data.current.temp_c}°C`);

  } catch (error) {
    console.error("App Error:", error);
  }
}
```

-----

###  Project for Part 4: "Github User Finder"

Let's build a small app that takes a GitHub username and pulls their real profile photo and bio.

**HTML:**

```html
<input type="text" id="username" placeholder="Enter GitHub Username">
<button onclick="getProfile()">Search</button>

<div id="profile"></div>
```

**JavaScript:**

```javascript
async function getProfile() {
  const input = document.querySelector("#username");
  const container = document.querySelector("#profile");
  const user = input.value;

  // Show loading state
  container.innerHTML = "Searching...";

  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    
    if (!response.ok) {
      throw new Error("User not found!");
    }

    const data = await response.json();

    // Render the HTML
    container.innerHTML = `
      <img src="${data.avatar_url}" width="100" style="border-radius: 50%">
      <h3>${data.name}</h3>
      <p>${data.bio}</p>
      <p>Followers: ${data.followers}</p>
    `;
    
  } catch (err) {
    container.innerHTML = `<span style="color: red">${err.message}</span>`;
  }
}
```

-----

###  Part 4 Summary

  * **Event Loop:** JS uses a Queue and Stack to handle slow tasks without freezing.
  * **Callback Hell:** The old, messy way of nesting functions.
  * **Promises:** Objects that represent a future value (Pending -\> Resolved/Rejected).
  * **Async/Await:** Syntactic sugar that makes async code look cleaner and easier to read.
  * **Fetch:** The modern tool for making HTTP requests. Always requires two awaits (one for the fetch, one for the `.json()` conversion).

This concludes the "Core" JavaScript knowledge. You can now build functional web applications\!