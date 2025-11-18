---
layout: ../../../layouts/TechLessonLayout.astro
title: "Unit 3: Java Script and JQuery "
description: "Make your Webpages/Websites functional."
pubDate: "2025-11-01"
category: "webdev"
level: "Beginner"
# heroImage: "/images/my-image.png"  #(this is optional)
updatedDate: "2025-11-01"           #(this is optional)
---




## 1. JavaScript Basics: Functions

A **function** is a reusable block of code designed to perform a specific task. You "declare" a function once and can then "call" (or "invoke") it as many times as you need.

* **Why use them?** To avoid repeating yourself (DRY - Don'T Repeat Yourself) and to organize your code into logical, manageable pieces.
* **Parameters:** These are variables listed in the function's definition, acting as placeholders for values you'll "pass" to the function.
* **Return Value:** A function can send a value back using the `return` keyword.

```javascript
// 1. DECLARE the function with two parameters
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum; // 3. Send the result back
}

// 2. CALL the function with two arguments (the actual values)
let result = addNumbers(5, 10);

console.log(result); // Output: 15
````

-----

## 2\. JavaScript Basics: Arrays

An **array** is a single variable that holds a list of multiple values. These values can be strings, numbers, objects, or even other arrays.

  * **Indexing:** Arrays are **zero-indexed**, meaning the first item is at position `[0]`, the second at `[1]`, and so on.
  * **Properties & Methods:**
      * `.length`: Tells you how many items are in the array.
      * `.push(item)`: Adds a new item to the *end* of the array.
      * `.pop()`: Removes the *last* item from the array.
      * `.forEach(function)`: A common way to loop through each item.

<!-- end list -->

```javascript
// An array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// Access an item by its index
console.log(fruits[1]); // Output: "Banana"

// Add an item to the end
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// Check the length
console.log(fruits.length); // Output: 4
```

-----

## 3\. The DOM (Document Object Model)

The **DOM** is a tree-like structure that the browser creates to represent all the HTML elements on a webpage. JavaScript can interact with the DOM to **change, add, or remove HTML elements and attributes**. This is what makes webpages interactive.

  * **Selecting Elements:**
      * `document.getElementById('some-id')`: Selects one element by its `id`.
      * `document.querySelector('.some-class')`: Selects the *first* element that matches a CSS selector.
  * **Manipulating Elements:**
      * `.innerHTML`: Changes the HTML *inside* an element.
      * `.textContent`: Changes just the text *inside* an element (safer\!).
      * `.style.property`: Changes CSS styles (e.g., `.style.color = 'blue'`).

<!-- end list -->

```html
<h1 id="title">Hello World</h1>
```

```javascript
// In your JavaScript file:
// 1. Select the element
let titleElement = document.getElementById("title");

// 2. Manipulate it
titleElement.textContent = "Goodbye!";
titleElement.style.color = "red";
// The <h1> on the page now says "Goodbye!" in red.
```

-----

## 4\. Built-in Objects

JavaScript comes with a standard library of "objects" that provide useful properties and methods for common tasks.

  * **`Math` Object:** Used for mathematical constants and functions.
      * `Math.random()`: Generates a random number between 0 and 1.
      * `Math.floor(x)`: Rounds a number *down* to the nearest integer.
      * `Math.PI`: The constant for Pi (3.14159...).
  * **`Date` Object:** Used for working with dates and times.
      * `new Date()`: Creates a new `Date` object with the current date and time.
      * `.getFullYear()`: Gets the year from a date object.
  * **`String` Object:** (Primitives are auto-boxed into objects)
      * `.toUpperCase()`: Converts a string to uppercase.
      * `.includes('sub')`: Checks if a string contains a substring.

<!-- end list -->

```javascript
// Math object
let randomNumber = Math.floor(Math.random() * 10) + 1; // Random integer 1-10
console.log(randomNumber);

// Date object
let today = new Date();
console.log(today.getFullYear()); // Output: (the current year)
```

-----

## 5\. Regular Expression (Regex)

A **Regular Expression** (or Regex) is a sequence of characters that defines a search pattern. It's used to find or validate text.

  * **Why?** Essential for form validation (e.g., "Is this a valid email?" or "Is this a valid phone number?") and for finding/replacing text.
  * **Creating a Regex:** Patterns are enclosed in slashes `/pattern/`.
  * **Key Method: `.test()`:** This method is called on a regex and passed a string. It returns `true` or `false` if the pattern is found.

<!-- end list -->

```javascript
// A simple regex to check if a string contains ONLY letters (no numbers/spaces)
let lettersOnly = /^[a-zA-Z]+$/;

// Test it
console.log(lettersOnly.test("HelloWorld")); // Output: true
console.log(lettersOnly.test("Hello World")); // Output: false (due to space)
console.log(lettersOnly.test("Hello123")); // Output: false (due to numbers)
```

-----

## 6\. Event Handling

**Events** are actions that happen in the browser, such as a user clicking a button, hovering over an element, or pressing a key. **Event Handling** is the process of "listening" for these events and running a function (a "callback") in response.

  * **Common Events:** `click`, `mouseover`, `mouseout`, `keydown` (key pressed), `submit` (form submitted).
  * **The Listener:** The modern way to handle events is with `addEventListener()`.

<!-- end list -->

```html
<button id="myButton">Click Me!</button>
```

```javascript
// In your JavaScript file:
// 1. Select the element
let btn = document.getElementById("myButton");

// 2. Add an event listener
// It waits for a 'click' event, then runs the function
btn.addEventListener("click", function() {
  alert("You clicked the button!");
});
```

-----

## 7\. Validation

**Validation** is the process of checking that user-provided data (usually from a form) is in the correct format and makes sense before it's submitted.

  * **Client-Side Validation:** This is validation that happens in the user's browser (using JavaScript). It's fast and gives the user immediate feedback.
  * **Example:** Checking if a "required" field is empty, if an email looks like an email (using Regex), or if a number is within a specific range.

<!-- end list -->

```html
<form id="myForm">
  <label>Username:</label>
  <input type_text" id="username">
  <button type="submit">Submit</button>
</form>
```

```javascript
// In your JavaScript file:
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event) {
  let usernameInput = document.getElementById("username");

  // VALIDATION CHECK: Is the username field too short?
  if (usernameInput.value.length < 5) {
    // If validation fails:
    alert("Username must be at least 5 characters long!");
    event.preventDefault(); // This STOPS the form from submitting
  }
});
```

-----

## 8\. JSON Basics

**JSON** stands for **J**ava**S**cript **O**bject **N**otation. It's a lightweight, **text-only** format for data interchange. It's easy for humans to read and for machines to parse.

  * **Why?** It's the most common way to send data from a server to a web browser (e.g., when "fetching" data).
  * **Syntax Rules:**
    1.  Data is in `key/value` pairs (like JS objects).
    2.  **Keys must be strings** in double quotes (`"`).
    3.  Data is separated by commas.
  * **Key JS Methods:**
      * `JSON.parse(text)`: Converts a JSON text string into a real JavaScript object.
      * `JSON.stringify(object)`: Converts a JavaScript object into a JSON text string.

<!-- end list -->

```javascript
// A JSON string (this is what you might get from a server)
let userJSON = '{"name": "Mohd. Owais", "isStudent": true, "courses": ["Web", "AI"]}';

// 1. Parse the JSON into a JS object
let userObject = JSON.parse(userJSON);

console.log(userObject.name); // Output: "Mohd. Owais"

// 2. Stringify an object back into JSON
let car = { make: "Toyota", model: "Camry", year: 2021 };
let carJSON = JSON.stringify(car);

console.log(carJSON); // Output: '{"make":"Toyota","model":"Camry","year":2021}'
```

-----

## 9\. jQuery Basics

**jQuery** is a fast, small, and feature-rich **JavaScript library**. It is *not* a separate language. Its goal is to make tasks like DOM manipulation and event handling much simpler. The motto is "Write less, do more."

  * **The `$` Sign:** The `$` is the "jQuery" function. It's used to "select" elements from the DOM, just like `querySelector`. `$(selector)`

  * **Method Chaining:** You can "chain" multiple jQuery commands together on one line.

  * **JS vs. jQuery:**

      * **Vanilla JS (DOM):** `document.getElementById('title').style.color = 'blue';`

      * **jQuery (DOM):** `$('#title').css('color', 'blue');`

      * **Vanilla JS (Event):** `btn.addEventListener('click', myFunc);`

      * **jQuery (Event):** `$('#myButton').on('click', myFunc);`

<!-- end list -->

```html
<script src="[https://code.jquery.com/jquery-3.7.1.min.js](https://code.jquery.com/jquery-3.7.1.min.js)"></script>

<h1 id="welcome">Hello!</h1>
<button id="btn">Change Me</button>
```

```javascript
// In your JavaScript file (after jQuery is loaded)
$(document).ready(function() {
  // Wait for the DOM to be ready before running jQuery
  
  // 1. Select the button and add a click event
  $('#btn').on('click', function() {
    
    // 2. Select the <h1>, change its text, and fade it out
    $('#welcome').text('jQuery is cool!').fadeOut(1000);
  });
});
```

-----

## 10\. jQuery Plugins

**Plugins** are pre-written pieces of jQuery code that add specific functionality, so you don't have to build it from scratch.

  * **Examples:** Image sliders (carousels), date pickers (pop-up calendars), form validation, animated tooltips.
  * **How to Use (General Steps):**
    1.  Include the jQuery library (like normal).
    2.  Include the plugin's JavaScript and CSS files (which you download).
    3.  Call the plugin's special function on a jQuery selector, as shown in its documentation.

**Example (Hypothetical for a carousel plugin called "Slick"):**

```html
<script src="https.../jquery.min.js"></script>
<script src=".../slick.min.js"></script>
<link rel="stylesheet" href=".../slick.css">

<div class="my-slider">
  <div><img src="pet1.jpg"></div>
  <div><img src="pet2.jpg"></div>
  <div><img src="pet3.jpg"></div>
</div>
```

```javascript
// 3. Call the plugin's function on your selector
$(document).ready(function(){
  $('.my-slider').slick(); // That's it! It's now a slider.
});
```

