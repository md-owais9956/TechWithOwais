---
layout: ../../../layouts/TechLessonLayout.astro
title: "Unit 2: HTML and CSS"
description: "How to Build a Web Page for Your Cat"
pubDate: "2025-10-21"
category: "webdev"
level: "Beginner"
# heroImage: "/images/my-image.png"  #(this is optional)
updatedDate: "2025-10-21"           #(this is optional)
---



# Unit 2: How to Build a Web Page for Your Cat

Let's dive into Unit 2, but forget the dry-as-toast textbook definitions. Welcome to the "How to Build a Web Page for Your Cat" edition.

## Part 1: HTML5 (The Skeleton)


Think of HTML as the **skeleton** of your webpage. It gives everything its basic structure, but it's not pretty. It's just the bones.

### HTML Basics (The Boilerplate)

This is the minimum "skeleton" every HTML page needs.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mr. Whiskers' Page</title>
  </head>
  <body>
    </body>
</html>
```

  * `<html>`: The big box holding everything.
  * `<head>`: The "shipping label" with info *about* the page.
  * `<body>`: The *actual content* inside the box.

### Formatting (The Voice)

  * `<h1>`: The LOUDEST heading. "MR. WHISKERS IS KING\!"
  * `<p>`: A normal paragraph. "He enjoys long naps."
  * `<strong>`: Makes text **important** (and bold).
  * `<em>`: Puts *emphasis* on text (and italic).

<!-- end list -->

```html
<h1>The Chronicles of Mr. Whiskers</h1>
<p>
  He enjoys long naps, judging me from afar, and <em>expensive</em> tuna.
</p>
<p>He <strong>hates</strong> the dog next door.</p>
```

### Images (`<img>`)

You need to show off Mr. Whiskers, obviously.

```html
<img src="mr_whiskers_judging_me.jpg" alt="A photo of Mr. Whiskers looking disappointed">
```

  * `src` is the "source" – where the picture lives.
  * `alt` is the "alternate text" – crucial for accessibility and broken images.

### Links (`<a>`)

This is how you create clickable portals to other pages.

```html
<a href="https://www.buy-more-tuna.com">Click here for tuna emergencies</a>
```

### Tables (`<table>`, `<tr>`, `<th>`, `<td>`)

For organizing data, like Mr. Whiskers' nap schedule.

  * `<table>`: The whole grid.
  * `<tr>`: A table **r**ow.
  * `<th>`: A table **h**eader (bold and centered).
  * `<td>`: A table **d**ata cell.

<!-- end list -->

```html
<table>
  <tr>
    <th>Time</th>
    <th>Activity</th>
  </tr>
  <tr>
    <td>9 AM</td>
    <td>Pre-breakfast nap</td>
  </tr>
  <tr>
    <td>10 AM</td>
    <td>Post-breakfast nap</td>
  </tr>
</table>
```

| Time | Activity |
| :--- | :--- |
| 9 AM | Pre-breakfast nap |
| 10 AM | Post-breakfast nap |

### Lists (`<ul>`, `<ol>`, `<li>`)

  * `<ul>`: An **u**nordered **l**ist (bullets) for "Reasons Mr. Whiskers is Annoyed."
  * `<ol>`: An **o**rdered **l**ist (numbers) for "Steps to Pet Mr. Whiskers."
  * `<li>`: A **l**ist **i**tem (used inside both).

<!-- end list -->

```html
<ul>
  <li>The food bowl is 98% full, not 100%.</li>
  <li>I sneezed.</li>
  <li>The dog exists.</li>
</ul>

<ol>
  <li>Present hand for sniffing.</li>
  <li>Wait for approval (a slow blink).</li>
  <li>Stop immediately. Do not push your luck.</li>
</ol>
```

### Layout (The Floor Plan)

These "semantic" tags describe the *purpose* of each section.

```html
<header>
  <h1>The Chronicles of Mr. Whiskers</h1>
</header>

<nav>
  <a href="/">Home</a>
  <a href="/gallery">Gallery of Judgment</a>
</nav>

<section>
  <h2>About Me</h2>
  <p>I am a cat. I nap.</p>
</section>

<footer>
  <p>Copyright 2025. All naps reserved.</p>
</footer>
```

### Forms (`<form>`, `<input>`, `<label>`)

How you get info *from* your users.

  * `<label>` is important\! It links the text to the input box.

<!-- end list -->

```html
<form>
  <label for="user-name">Your Name:</label>
  <input type="text" id="user-name" name="user_name">

  <label for="user-pledge">Your Pledge of Allegiance:</label>
  <input type="text" id="user-pledge" name="pledge">
  
  <input type="submit" value="Pledge to the King">
</form>
```

### Media (`<video>`, `<audio>`)

For when pictures aren't enough.

```html
<video controls width="400" src="mr_whiskers_chasing_laser.mp4">
  Your browser does not support the video tag.
</video>

<audio controls src="mr_whiskers_purring.mp3">
  Your browser does not support the audio tag.
</audio>
```

  * `controls` adds the play/pause/volume buttons.

-----

## Part 2: CSS3 (The Clothes & Makeup)

If HTML is the skeleton, CSS (Cascading Style Sheets) is the **skin, clothes, hair, and personality**. It's what makes the webpage not look like a sad document from 1995.

### CSS Basics (3 Ways to Style)

The syntax is always: `selector { property: value; }`

1.  **Inline CSS** (Fast, but messy):

    ```html
    <h1 style="color: red; font-size: 16px;">I'm a red, small heading</h1>
    ```

2.  **Internal CSS** (Good for one page):

    ```html
    <head>
      <style>
        p {
          color: blue;
        }
      </style>
    </head>
    <body>
      <p>I'm a blue paragraph!</p>
    </body>
    ```

3.  **External CSS** (The Best Practice\!):

      * In `style.css` file:
        ```css
        body {
          background-color: #f0f0f0;
        }
        ```
      * In `index.html` file:
        ```html
        <head>
          <link rel="stylesheet" href="style.css">
        </head>
        ```

### Selectors (The "Who")

  * **Element Selector**: `p` (Selects ALL `<p>` tags).
  * **Class Selector**: `.royal-cat` (Selects only elements you've *given* the class "royal-cat").
  * **ID Selector**: `#main-photo` (Selects the *one and only* element with the ID "main-photo").

<!-- end list -->

```css
/* Element: All paragraphs will be gray */
p {
  color: #333;
}

/* Class: Anything with class="royal-cat" gets a crown emoji */
.royal-cat {
  border: 2px solid gold;
}

/* ID: The ONE element with id="main-photo" gets a shadow */
#main-photo {
  box-shadow: 5px 5px 10px #888;
}
```

### Box Model (The Personal Bubble)

**Every HTML element is a rectangular box.**

1.  **Content**: The stuff inside.
2.  **Padding**: The comfy pillow *inside* the box.
3.  **Border**: The visible wall of the box.
4.  **Margin**: The "personal space" *outside* the box.

<!-- end list -->

```css
.my-box {
  width: 300px;
  background-color: lightblue;
  
  /* 10px of "pillow" space INSIDE the box */
  padding: 10px; 
  
  /* A 2px solid black wall */
  border: 2px solid black; 
  
  /* 20px of "personal space" OUTSIDE the box */
  margin: 20px; 
}
```

### Backgrounds and Borders

  * `border-radius: 15px;`: This is the magic one. It rounds the corners\!

<!-- end list -->

```css
.fancy-button {
  background-color: royalblue;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px; /* Makes it a "pill" button */
}
```

### Text Effects

```css
h1 {
  /* Chooses the font. Has fallbacks if the first isn't found. */
  font-family: 'Georgia', serif;
  
  /* How big the text is. */
  font-size: 3rem; /* 3x the browser's default size */
  
  /* How "heavy" the text is. */
  font-weight: 900; /* (bold is 700) */
  
  /* Puts the text in the middle. */
  text-align: center;
}
```

### Advanced Features (A Taste of Flexbox)

In the old days, centering was a nightmare. Now, we have **Flexbox**.

Want to center a box (`.child`) inside another box (`.parent`)?

```html
<div class="parent">
  <div class="child">I'm centered!</div>
</div>
```

```css
.parent {
  display: flex;
  
  /* Centers horizontally */
  justify-content: center; 
  
  /* Centers vertically */
  align-items: center; 
  
  height: 200px;
  background-color: #eee;
}

.child {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```
---
>***you all catch up. If you want a more detailed explaination you can go further.***
---

Here is a deep, conceptual explanation of HTML and CSS.

-----

## The Core Philosophy: Structure vs. Presentation

Before we write a single line of code, we must understand the most important concept in web development: **Separation of Concerns**.

Imagine you're building a house .

  * **HTML (HyperText Markup Language)** is the **architectural blueprint and the raw structure**. It defines the rooms and their purpose. This is a "bedroom," this is a "kitchen," this is a "doorway." It's the foundation, the wooden studs, and the drywall. The house is *functional*—you can walk from room to room—but it's ugly, bare, and unlivable. HTML is **all about meaning and structure (semantics)**.

  * **CSS (Cascading Style Sheets)** is the **interior designer and the paint crew**. It takes the existing structure and makes it beautiful. It says, "The kitchen walls will be blue," "The bedroom will have hardwood floors," and "The doorway will be a grand, arched opening." CSS **does not change the structure** (the kitchen is still a kitchen), but it completely changes its **look and feel (presentation)**.

Your browser is the construction crew that reads both the blueprint (HTML) and the design notes (CSS) to build the final, beautiful house (your webpage) for the visitor.

-----

## A Deep Dive into HTML: The Language of Meaning

The biggest mistake new developers make is thinking HTML is for "making text bold" or "putting an image here." That's a side effect.

The true purpose of HTML is to **give your content meaning**.

### 1\. The DOM (Document Object Model)

When a browser reads your HTML file, it doesn't just read text. It builds a "family tree" in its memory called the **DOM**. Every HTML tag you write becomes a "node" (a box) in this tree.

**If you write this HTML:**

```html
<body>
  <header>
    <h1>My Website</h1>
  </header>
  <article>
    <p>My first paragraph.</p>
  </article>
</body>
```

**The browser builds this DOM tree:**

```
          <body>
            |
      +-----+-----+
      |           |
  <header>     <article>
      |           |
     <h1>         <p>
```

**Why this matters:**

  * This tree structure is *everything*.
  * CSS uses this tree to know *what* to style.
  * JavaScript (Unit 3) uses this tree to know *what* to change or make interactive.

### 2\. Semantics: The `<div>` vs. `<article>` Showdown

HTML provides tags to structure your content.

  * **Non-Semantic Tags:** `<div>` and `<span>`. These are generic boxes. They have *no meaning*.
      * `<div>`: A generic **block-level** box. It's for grouping other elements.
      * `<span>`: A generic **inline** box. It's for grouping small bits of text *inside* a line.
  * **Semantic Tags:** `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<main>`. These are also boxes, but they **tell the browser (and search engines, and screen readers) what they are *for***.

| What You Want | Bad HTML (No Meaning) | Good HTML (Semantic) |
| :--- | :--- | :--- |
| A top banner | `<div id="header">...</div>` | `<header>...</header>` |
| A blog post | `<div class="post">...</div>` | `<article>...</article>` |
| Navigation links | `<div class="nav">...</div>` | `<nav>...</nav>` |

A screen reader for a visually impaired user *understands* that `<nav>` is for navigation, allowing them to "jump to navigation." It has no idea what `<div class="nav">` is. **Always use semantic tags when one exists.**

### 3\. Block vs. Inline: The Two "Personalities"

Every HTML element has a default "personality" for how it behaves on the page.

  * **Block-Level Elements:** king

      * **Behavior:** They are the "divas." They demand their own line and take up the **full available width**, pushing other elements down.
      * **Examples:** `<h1>`...`<h6>`, `<p>`, `<div>`, `<header>`, `<ul>`, `<li>`.
      * You **can** give them a specific `width` and `height`.

  * **Inline-Level Elements:** friend

      * **Behavior:** They are "friendly." They sit *inside* the flow of text and only take up as much width as their content needs.
      * **Examples:** `<a>` (links), `<strong>`, `<em>`, `<span>`, `<img>`.
      * You **cannot** give them a `width` or `height` in CSS (this confuses many beginners\!).

This default behavior is the foundation of all web layout.

-----

## A Deep Dive into CSS: The Language of Rules

CSS is a powerful "rules-based" language. You write a "selector" (a rule for *who* to target) and then provide "declarations" (a list of *what* to do to them).

`selector { property: value; }`

### 1\. The "C" in CSS: The Cascade

"Cascading" means your styles "flow down" like a waterfall. This is the system the browser uses to decide which style rule *wins* when multiple rules conflict.

The browser follows a specific priority list.

**Priority 1: Specificity**
This is the most important concept. The browser "scores" your selectors to see which one is more specific.

  * **ID Selector:** `#my-id` (Score: 100) - **Extremely specific**. Like a person's social security number.
  * **Class Selector:** `.my-class` (Score: 10) - **Medium specific**. Like a person's last name (many can have it).
  * **Element Selector:** `p` (Score: 1) - **Not specific**. Targets every single paragraph.

**Example Conflict:**

```css
/* Score: 1 */
p {
  color: blue; 
}

/* Score: 10 (Class > Element) - THIS ONE WINS */
.my-paragraph {
  color: red; 
}
```

```html
<p class="my-paragraph">This text will be RED.</p>
<p>This text will be BLUE.</p>
```

**Priority 2: Source Order**
If two selectors have the *exact same specificity score*, the one that is defined **last in the stylesheet wins**.

```css
p { color: blue; }
p { color: green; } /* <-- THIS ONE WINS */
```

**Priority 3: `!important`**
This is the "atomic bomb". It breaks the cascade and wins almost every time. It's considered bad practice because it makes debugging a nightmare, but you should know it exists.

```css
p { 
  color: red !important; /* THIS ONE WINS, no matter what */
}
.my-paragraph {
  color: green; 
}
```

### 2\. The Box Model: Your True Enemy (and Best Friend)

As we learned in the funny example, every element is a box. But there are *two different ways* to measure that box, and this causes 90% of all beginner frustration.

  * `content-box` (The default, weird one):

      * If you set `width: 200px` and `padding: 20px`...
      * ...the **final width** of the box is `240px` (`200px` content + `20px` left padding + `20px` right padding).
      * This is insane and makes math hard.

  * `border-box` (The modern, sane one):

      * If you set `width: 200px` and `padding: 20px`...
      * ...the **final width** of the box is **still `200px`**.
      * The padding is *subtracted* from the content area, "eating" its way inwards.
      * This is intuitive and what you always want.

**The Magic Snippet:** Put this at the top of your CSS file. It forces every element on your page to use the sane `border-box` model.

```css
* {
  box-sizing: border-box;
}
```

### 3\. Advanced Selectors: The "Sniper Rifles" of CSS

Selectors are more than just classes and IDs. You can target elements based on their *relationships* in the DOM tree.

  * **Descendant Selector (space):** `article p`

      * **Targets:** *Any* `<p>` tag that is *somewhere inside* an `<article>`, no matter how deep.

  * **Child Selector (\>):** `article > p`

      * **Targets:** Only a `<p>` tag that is a *direct child* (one level down) of an `<article>`.

  * **Adjacent Sibling (+):** `h2 + p`

      * **Targets:** A `<p>` tag that comes *immediately after* an `<h2>` tag (and is its sibling).

  * **Pseudo-classes (States):**

      * `:hover` - When the user's mouse is over the element.
      * `:focus` - When the element (like an `<input>`) is selected.
      * `:nth-child(even)` - Targets every even-numbered child (e.g., for striped tables).

  * **Pseudo-elements (Virtual Elements):**

      * `::before` & `::after` - Lets you create and style "fake" elements in CSS that aren't in your HTML. Perfect for adding small icons or decorative flourishes without cluttering your code.