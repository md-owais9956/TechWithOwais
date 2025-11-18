---
layout: ../../../layouts/TechLessonLayout.astro
title: "Unit 1: Intro to Web Development Systems"
description: "A basic understanding of web system(The Foundation)"
pubDate: "2025-10-18"
category: "webdev"
level: "Beginner"
# heroImage: "/images/my-image.png"  #(this is optional)
updatedDate: "2025-10-18"           #(this is optional)
---



#  Imagine the Internet as a Magical City

Welcome to the magical city of the Internet!  
You live here, and you want to get stuff—like a pizza, a book, or watch a movie.  
This guide teaches you **how the city is built, how to get around, and how to order things**.  

---

## 1️. Internet vs. World Wide Web (WWW)

**Most common mix-up:** They are NOT the same thing!  

**The Internet:**  
- The entire city itself.  
- All the **roads, plumbing, electrical wires, and physical land**.  
- The **infrastructure** connecting everything: cables, Wi-Fi signals, satellites.  

**The WWW (World Wide Web):**  
- The **shops, houses, and buildings** you visit using the roads.  
- All websites and webpages: [Google](https://www.google.com), [YouTube](https://www.youtube.com), [Wikipedia](https://www.wikipedia.org).  

**Funny Analogy:**  
- Internet = the road system  
- WWW = pizza parlors, libraries, movie theaters along the roads  
- Roads can also be used for other things: email, gaming, or even parades!  

---

## 2️. Web Browsers and Web Servers

**Web Browser (The Client):**  
- Your car (or teleporter) to get around the city.  
- Tools like **[Google Chrome](https://www.google.com/chrome/), [Firefox](https://www.mozilla.org/firefox/), [Safari](https://www.apple.com/safari/)**.  
- You are the **client**, or customer.  

**Web Server (The Server):**  
- The shop or restaurant storing all website files (text, images, videos).  
- Ready to "serve" anyone who asks.  

**Funny Analogy:**  
- You (the Client) are hungry.  
- Get in your Browser (car) → drive to the "[Google Pizza](https://www.google.com)" Server (pizza shop) → order a pizza.  

---

## 3️. Web System Architecture (Client-Server Model)

This is the **“how to order a pizza” process** for the entire web.  

### Step-by-Step:

1. **You make a Request:**  
   - Get in your Browser (car) → drive to pizza shop → "One large pepperoni, please!"  
   - Equivalent to typing [www.google.com](https://www.google.com) and pressing Enter.

2. **Server processes the Request:**  
   - Chef in the kitchen checks ingredients.  
   - Server finds the website files you requested.

3. **Server sends a Response:**  
   - Chef hands you the pizza box.  
   - Server sends HTML, CSS, images back to your browser.  

4. **Your Browser displays the Response:**  
   - Open the box → see a delicious pizza!  
   - Browser assembles all files into the interactive webpage you see.  

> 💡 This **request-response cycle** is the heartbeat of the internet.  

---

## 4️. Web Protocols (The Rules of Ordering)

**Protocol = a set of rules for communication.**  
- Think of it as the **official language** everyone agrees on.  

### HTTP (Hypertext Transfer Protocol)  
- Magic language for ordering pizza.  
- Browser sends **HTTP GET Request** → Server sends **HTTP Response**.  

**Analogy:**  
- You speak HTTP → Server understands → Sends back webpage.  

### HTTPS (HTTP Secure)  
- Same as HTTP, but **encrypted**.  
- Like ordering in a secret coded language.  
- Essential for online banking, shopping, and login pages.  

**Examples:**  
- [HTTP](http://httpforever.com/) (not secure)  
- [HTTPS](https://www.yourbank.com) (secure, encrypted)  

---

## 5️. URL and Domain Name (City Address System)
---
# How do you find the pizza shop?
---
## URL (Uniform Resource Locator)
Full, detailed address:  

[https://www.pizzashop.com/menu/pepperoni.html](https://www.pizzashop.com/menu/pepperoni.html)

*Analogy:* Go to the secure pizza shop → enter menu room → get `pepperoni.html` flyer.

---

## Domain Name
Easy-to-remember building name:  

pizzashop.com



Much easier than remembering IP addresses (like `172.217.14.228`).

### DNS (Domain Name System)
The city’s phonebook → translates domain names into IP addresses.

---

## 6️. Client-Side and Server-Side Scripting

### Client-Side Scripting (Dining Room Action)
Runs in your browser after pizza arrives.  

**Analogy:** Cut slices, add toppings, stack pizzas at your table.  

**Example:** Clicking a photo to enlarge it, filling a form and seeing an error instantly (JavaScript).

### Server-Side Scripting (Kitchen Action)
Runs on the server before pizza is sent.  

**Analogy:** Chef customizes your pizza in the kitchen using stored recipes.  

**Example:** Logging into Gmail → server checks database → builds custom HTML page for you.

---

##  Summary
- You (Client) use your Browser (car)  
- Go to a Domain Name (easy address) → points to a Server (shop)  
- Use HTTP (ordering language) to request a page  
- Server may use Server-Side code (kitchen magic)  
- Browser may use Client-Side code (dining table magic) to make the page interactive  

 Welcome to the magical city of the Internet! Now you know how to get pizza—or a webpage! 


---

***You all catch up.***
***If you want a more detailed explaination you can go further.***

---



# An Introduction to Web Systems

Here is a deep dive into the foundational concepts of web systems.

## The Internet: The Global Network

Think of the Internet as the **global physical infrastructure**. It's the "road system" of the digital world.

* **What it is:** A massive, worldwide **network of networks**. It's a collection of billions of privately and publicly owned computers, servers, and devices all connected through cables (like fiber optics), Wi-Fi, satellites, and other technologies.
* **Its Job:** Its one and only job is to move data. It doesn't know *what* the data is—it could be an email, a website, or a video stream. It just knows *how* to send it from one point to another.
* **Core Protocol (TCP/IP):** The Internet works by using a set of rules called the **Internet Protocol Suite**, commonly known as **TCP/IP**.
    * **IP (Internet Protocol):** This is the "addressing" part. Every device on the Internet has a unique **IP address** (e.g., `172.217.14.228`). This is like the postal address for your computer. IP is responsible for routing data "packets" (small chunks of your data) to the correct destination.
    * **TCP (Transmission Control Protocol):** This is the "reliability" part. When you request a large file (like an image), TCP breaks it down into numbered packets, sends them via IP, and then reassembles them in the correct order on the other end. It also checks for errors and re-sends any packets that get lost.

**Analogy:** The Internet is the entire global road network. TCP/IP is the set of rules for driving, addressing packages (IP), and ensuring the package (TCP) arrives complete.

---

## The World Wide Web (WWW): The Information on the Network

If the Internet is the "road system," the World Wide Web (or "the Web") is **all the destinations you can visit** using those roads.

* **What it is:** The Web is an **information system** that *runs on* the Internet. It's a vast collection of interconnected documents (web pages) and other resources (images, videos) that are linked together using **hyperlinks**.
* **Its Job:** To provide a user-friendly way to access and navigate information.
* **Core Components:**
    * **HTML (HyperText Markup Language):** The standard "language" used to create web pages. It defines the *structure* of a page (e.g., "this is a heading," "this is a paragraph," "this is a link").
    * **Hyperlinks:** These are the "links" (the *HyperText* part) that connect one page to another, creating a "web" of information.
    * **HTTP:** The protocol (rules) used to request and transfer these web pages.

**Analogy:** The Web is the universe of all buildings, shops, and houses (websites) connected by the roads (Internet). HTML is the blueprint for a building, and hyperlinks are the doors and signs pointing to other buildings.

---

## Web Protocols: The Rules of Communication

Protocols are the formal "languages" and rules that devices must follow to communicate. Without them, it would be chaos.

* **HTTP (HyperText Transfer Protocol):** This is the primary protocol of the Web. It's a "request-response" protocol.
    1.  **Request:** Your browser (the client) sends an HTTP *request* to a server (e.g., "GET me the page /index.html").
    2.  **Response:** The server sends back an HTTP *response* (e.g., "OK, here is the HTML for that page" or "Error 404: Page Not Found").
    * **Stateless:** A key "deep" concept is that HTTP is **stateless**. This means each request is treated as a brand new, independent event. The server doesn't remember who you are from one request to the next. (We use "cookies" and "sessions" to work around this, which are managed by scripting).
* **HTTPS (HTTP Secure):** This is simply HTTP with a crucial layer of security added on top, called **SSL/TLS** (Secure Sockets Layer/Transport Layer Security).
    * **Encryption:** It scrambles the data between your browser and the server. This means anyone eavesdropping on your Wi-Fi can't read your passwords or credit card numbers. 
    * **Authentication:** It uses a digital "certificate" to prove that the server you're connecting to is *actually* who it claims to be (e.g., you're really on `your-bank.com` and not a hacker's fake site).

---

## Web Browsers and Web Servers: The Conversation Partners

The Web is built on a **Client-Server Model**.

* **Web Browsers (The Client):**
    * **Examples:** Google Chrome, Mozilla Firefox, Apple Safari.
    * **What it is:** A software application on *your* computer (your "client" device).
    * **Its Job (The "Render" Engine):**
        1.  Takes your request (like typing a URL).
        2.  Sends the proper **HTTP request** to the correct server.
        3.  Receives the **response** (HTML, CSS, JavaScript files).
        4.  **Renders** (parses and draws) those files into the visual, interactive webpage you see and use.

* **Web Servers (The Server):**
    * **Examples:** Apache, Nginx, Microsoft IIS (these are the *software*). These run on powerful, always-on computers.
    * **What it is:** A computer (or the software on it) that *stores* a website's files and *listens* for requests.
    * **Its Job:**
        1.  Listens 24/7 for incoming HTTP requests.
        2.  When a request arrives (e.g., "GET /contact-us"), it finds the requested file.
        3.  It sends the file back in an **HTTP response** to the client.





---

## Web System Architecture

This describes *how* all the components are structured, especially for complex, dynamic applications (like Amazon or Facebook). The most common model is the **Three-Tier Architecture**.

1.  **Tier 1: Presentation Layer (The Client)**
    * This is the **Web Browser**.
    * Its only job is to *display* information to the user (the UI/UX) and send the user's requests to the next layer. It's the "face" of the application.

2.  **Tier 2: Application Layer (The "Brain")**
    * This is the **Web Server** running **server-side scripts**.
    * This layer contains all the "business logic." For example, "What happens when a user adds an item to their cart?" or "Does this user's password match the one in the database?"
    * It processes the client's request, makes decisions, and talks to the database to get or store data.

3.  **Tier 3: Data Layer (The "Memory")**
    * This is the **Database Server** (e.g., running MySQL, PostgreSQL, or MongoDB).
    * Its *only* job is to efficiently store, secure, and retrieve data.
    * The client *never* talks directly to this layer; it's a critical security boundary.

**Why use 3 tiers?** **Scalability** (if your website gets slow, you can upgrade just the database) and **Security** (your data is protected behind the application layer).

---

## URL and Domain Name: The Web's Address System

* **URL (Uniform Resource Locator):** This is the **complete, specific address** for a single *resource* on the web.
    * **Analogy:** A full mailing address: `John Smith, 123 Main St, Apt 4B, New York, NY, 10001`.
    * **Breakdown:** `https://www.example.com/path/to/page.html`
        * `https://` $\rightarrow$ The **Protocol** (how to get it)
        * `www.example.com` $\rightarrow$ The **Domain Name** (the building)
        * `/path/to/page.html` $\rightarrow$ The **Path** (the specific room/file inside the building)

* **Domain Name:** This is the **human-readable nickname** for a server's IP address.
    * **Analogy:** "The White House" (Domain Name) vs. "1600 Pennsylvania Ave" (IP Address).
    * Humans remember names; computers only understand numbers (IPs).

* **DNS (Domain Name System):** This is the "phone book of the Internet." It's a global system that **translates Domain Names into IP addresses**.
    * **Process:**
        1.  You type `google.com` into your browser.
        2.  Your browser asks a DNS server, "What's the IP for `google.com`?"
        3.  The DNS server replies, "It's `172.217.14.228`."
        4.  Your browser then sends its HTTP request to `172.217.14.228`.

---

## Client-side and Server-side Scripting: Making Websites Dynamic

A **static** website is like a printed brochure—everyone sees the exact same thing. A **dynamic** website is like a social media feed—it's customized for *you*. Scripting makes this possible.

* **Client-Side Scripting (Runs in *Your* Browser)**
    * **The Language:** Almost exclusively **JavaScript**.
    * **When it runs:** *After* the HTML/CSS page has arrived at your browser.
    * **What it does:** It manipulates the already-loaded page. It's responsible for **interactivity**.
    * **Examples:**
        * An image slideshow.
        * Form validation (e.g., "This email address is invalid!" *before* you even click submit).
        * Pop-up menus.
        * Updating a "like" count without reloading the entire page (this is called **AJAX**).

* **Server-Side Scripting (Runs on the *Web Server*)**
    * **The Languages:** Many choices, including **Python** (with Django/Flask), **PHP**, **Ruby** (on Rails), or **Node.js** (JavaScript on the server).
    * **When it runs:** *Before* the page is ever sent to your browser.
    * **What it does:** It generates a *customized* HTML page from scratch based on a request. It's responsible for **personalization and data handling**.
    * **Process Example (Logging in):**
        1.  You submit your username/password (a `POST` request).
        2.  The **server** receives this.
        3.  A **server-side script** (e.g., Python) runs.
        4.  It checks your password against user data stored in the **database** (Tier 3).
        5.  If it matches, the script *builds a new HTML page* that says "Welcome, [Your Name]!"
        6.  It sends this *final, customized* HTML page back to your browser.