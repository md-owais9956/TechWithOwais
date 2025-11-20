---
layout: ../../../layouts/TechLessonLayout.astro
title: "JAVASCRIPT: FROM ZERO TO HERO"
description: "Part 2: JavaScript in the Browser (The DOM)"
pubDate: "2025-11-21"
category: "webdev"
level: "basics"
# heroImage: "/images/my-image.png"  
updatedDate: "2025-11-21"           
---


##  JavaScript: Part 2 - The DOM (Making It Interactive)

Welcome to Part 2\! In Part 1, we learned the language itself (variables, loops, functions). Now, we are going to use that language to talk to the web page.

This is where the magic happens. We are going to learn how to change text, update colors, and respond to button clicks—all with code.

-----

### Module 6: What is the DOM?

The **DOM (Document Object Model)** is the bridge between your JavaScript code and your HTML design.

When a browser loads a webpage, it takes your HTML and builds a "tree" structure in memory. This tree is called the DOM.

  * **Document:** The whole webpage.
  * **Elements:** The branches and leaves (headings, paragraphs, buttons).

JavaScript can access this tree to change anything on the page.

#### 6.1 Selecting Elements

Before you can change something, you have to "grab" it. We use **Selectors** to find HTML elements.

Imagine this HTML:

```html
<h1 id="main-title">Hello World</h1>
<p class="description">This is a paragraph.</p>
<button>Click Me</button>
```

**The Old Way (Specific):**

  * `document.getElementById("main-title")`
  * `document.getElementsByClassName("description")`

**The Modern Way (Recommended):**
We use `querySelector`. It works just like CSS selectors\!

```javascript
// Selects the element with ID "main-title"
const title = document.querySelector("#main-title");

// Selects the first element with class "description"
const para = document.querySelector(".description");

// Selects the first <button> tag found
const btn = document.querySelector("button");

// Selects ALL elements with class "description" (returns a list)
const allParas = document.querySelectorAll(".description");
```

-----

### Module 7: Manipulating the DOM

Now that we have selected an element, let's change it.

#### 7.1 Changing Content

We can read or change the text inside an element.

```javascript
const title = document.querySelector("#main-title");

// 1. textContent (Best for plain text)
title.textContent = "Welcome to My JS Site!";

// 2. innerHTML (If you need to add HTML tags like <strong>)
title.innerHTML = "Welcome to <strong>My JS Site!</strong>";
```

#### 7.2 Changing Styles

You can change CSS directly from JS. The property names use "camelCase" (e.g., `backgroundColor` instead of `background-color`).

```javascript
const title = document.querySelector("#main-title");

title.style.color = "blue";
title.style.fontSize = "50px";
title.style.backgroundColor = "#f0f0f0";
```

#### 7.3 Changing Classes (Best Practice)

Instead of changing styles one by one, it's better to add or remove a CSS class. This keeps your styling in CSS and your logic in JS.

**CSS:**

```css
.dark-mode {
  background-color: black;
  color: white;
}
```

**JavaScript:**

```javascript
const body = document.querySelector("body");

// Add a class
body.classList.add("dark-mode");

// Remove a class
body.classList.remove("dark-mode");

// Toggle a class (Add if missing, remove if present)
body.classList.toggle("dark-mode");
```

-----

### Module 8: Events (Interactivity)

An **Event** is a signal that something happened—a click, a key press, a mouse movement. We use **Event Listeners** to "listen" for these signals and run a function when they happen.

#### 8.1 syntax: `addEventListener`

This method takes two arguments:

1.  The event name (e.g., `"click"`).
2.  The function to run.

<!-- end list -->

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  alert("You clicked the button!");
});
```

#### 8.2 Example: A Counter

Let's make a button that increases a number on the screen.

**HTML:**

```html
<h1 id="count-el">0</h1>
<button id="increment-btn">Increment</button>
```

**JavaScript:**

```javascript
// 1. Select elements
const countDisplay = document.querySelector("#count-el");
const btn = document.querySelector("#increment-btn");

let count = 0;

// 2. Add listener
btn.addEventListener("click", function() {
  // Update data
  count = count + 1;
  
  // Update the DOM (what the user sees)
  countDisplay.textContent = count;
});
```

#### 8.3 Common Events

  * `"click"`: When the user clicks.
  * `"submit"`: When a form is submitted.
  * `"input"` or `"change"`: When a user types in a text box.
  * `"keydown"`: When a keyboard key is pressed.

-----

### Module 9: Creating and Removing Elements

Sometimes you want to add new content that wasn't in your original HTML, like adding a new task to a To-Do list.

#### 9.1 Creating Elements

Three steps:

1.  **Create** the element.
2.  **Modify** it (add text/classes).
3.  **Append** (attach) it to the DOM.

<!-- end list -->

```javascript
// 1. Create a new <li> tag
const newItem = document.createElement("li");

// 2. Add text to it
newItem.textContent = "Buy Milk";
newItem.classList.add("todo-item");

// 3. Find the parent (the list) and add the new item
const list = document.querySelector("#todo-list");
list.append(newItem);
```

#### 9.2 Removing Elements

To remove something, you select it and call `.remove()`.

```javascript
const itemToRemove = document.querySelector(".todo-item");
itemToRemove.remove();
```

-----

###  Part 2 Summary

You have leveled up\! You now understand how websites work under the hood.

  * **The DOM** is the tree structure of your HTML.
  * **`querySelector`** is your main tool for finding elements.
  * You can change **text**, **styles**, and **classes** dynamically.
  * **`addEventListener`** lets you run code when a user interacts with the page.
  * You can **create** and **delete** HTML elements using JavaScript.

**Next Up:** In **Part 3**, we will modernize your skills with **ES6+ features** (Arrow functions, Template Literals) and learn how to work with Arrays like a pro\!



-----

##  Mini Project: Build a To-Do List App

**Prerequisites:** You should have completed Module 6-9 (The DOM).

In this project, we will combine everything we've learned to build a functioning application.
**The Goal:** Create an app where users can:

1.  Type a task.
2.  Click "Add" to put it on the list.
3.  Click a task to mark it as "Done".
4.  Click an "X" to remove it.

### Step 1: The Structure (HTML)

We need a simple layout: a title, an input box to type in, a button to add, and an empty list container (`<ul>`) where our tasks will go.

Create a file named `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My To-Do List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <div class="todo-app">
      <h2>To-Do List <img src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" alt="icon"></h2>
      
      <div class="row">
        <input type="text" id="input-box" placeholder="Add your text">
        <button onclick="addTask()">Add</button>
      </div>

      <ul id="list-container">
        </ul>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

-----

### Step 2: The Style (CSS)

Let's make it look good. We'll center everything and give it a nice card look.

Create a file named `style.css`:

```css
body {
  background: #153677; /* Dark Blue Background */
  font-family: sans-serif;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-app {
  width: 100%;
  max-width: 540px;
  background: #fff;
  margin: 100px auto 20px;
  padding: 40px 30px 70px;
  border-radius: 10px;
}

.todo-app h2 {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.todo-app h2 img {
  width: 30px;
  margin-left: 10px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #edeef0;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
}

input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
}

button {
  border: none;
  outline: none;
  padding: 16px 50px;
  background: #ff5945;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 40px;
}

ul li {
  list-style: none;
  font-size: 17px;
  padding: 12px 8px 12px 50px;
  user-select: none;
  cursor: pointer;
  position: relative;
}

/* The "Checked" state (Line-through) */
ul li.checked {
  text-decoration: line-through;
  color: #555;
}

/* The "X" close button */
ul li span {
  position: absolute;
  right: 0;
  top: 5px;
  width: 40px;
  height: 40px;
  font-size: 22px;
  color: #555;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}

ul li span:hover {
  background: #edeef0;
}
```

-----

### Step 3: The Logic (JavaScript)

This is the most important part. We will write logic to add tasks and logic to check/delete them.

Create a file named `script.js`:

#### Part A: Selecting Elements

First, we grab the input box and the list container so we can modify them.

```javascript
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
```

#### Part B: The "Add Task" Function

This function runs when you click the "Add" button.

```javascript
function addTask() {
  // 1. Check if the input is empty
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    // 2. Create a new list item (li)
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    
    // 3. Add the new li to the container
    listContainer.appendChild(li);

    // 4. Add the 'X' icon (using a span tag)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // This code creates a multiplication sign (x)
    li.appendChild(span);
  }
  
  // 5. Clear the input box after adding
  inputBox.value = "";
}
```

#### Part C: Checking and Deleting (Event Listener)

We add *one* event listener to the container. We check where the user clicked:

  * If they clicked the `LI` (the text), we toggle the "checked" class.
  * If they clicked the `SPAN` (the x), we remove the parent element.

<!-- end list -->

```javascript
listContainer.addEventListener("click", function(e) {
  
  if (e.target.tagName === "LI") {
    // Toggle the checked class
    e.target.classList.toggle("checked");
  } 
  else if (e.target.tagName === "SPAN") {
    // Remove the parent element (the li)
    e.target.parentElement.remove();
  }

}, false);
```

-----

###  Challenge for Students

Once you have this working, try these upgrades:

1.  **"Enter" Key:** Make it so pressing the "Enter" key on your keyboard also adds the task (not just clicking the button).
2.  **Save Data:** Right now, if you refresh the page, your tasks disappear. Try to research `localStorage` to save your tasks in the browser\!

-----

### How to test it?

1.  Create a folder on your desktop.
2.  Save the HTML, CSS, and JS code in that folder.
3.  Open `index.html` in your browser.
4.  Add tasks, cross them out, and delete them\!

You've just built your first web app. Congratulations\! 