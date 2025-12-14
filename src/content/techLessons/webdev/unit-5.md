---
layout: ../../../layouts/TechLessonLayout.astro
title: "Unit 5: PHP and MYSQL  "
description: "PHP and MYSQL"
pubDate: "2025-12-14"
category: "webdev"
level: "Beginner"
# heroImage: "/images/my-image.png" 
updatedDate: "2025-12-14"           
---


-----

## **Part 1: PHP Basics**

PHP (Hypertext Preprocessor) is a server-side scripting language. PHP code is executed on the server, and the result is returned to the browser as plain HTML.

### **1. Arrays**

Arrays store multiple values in a single variable.

  * **Indexed Arrays:** Numeric keys (0, 1, 2...).
  * **Associative Arrays:** Named keys (like a dictionary).
  * **Multidimensional Arrays:** Arrays containing other arrays.

<!-- end list -->

```php
<?php
// Indexed Array
$cars = array("Volvo", "BMW", "Toyota");
echo $cars[0]; // Outputs: Volvo

// Associative Array (Key => Value)
$ages = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo $ages['Peter']; // Outputs: 35

// Loop through Associative Array
foreach($ages as $name => $age) {
    echo "$name is $age years old.<br>";
}
?>
```

### **2. Functions**

Blocks of code that can be used repeatedly.

```php
<?php
// Function with parameters and return value
function addNumbers(int $a, int $b) {
    return $a + $b;
}

echo addNumbers(5, 10); // Outputs: 15
?>
```

### **3. Form Handling**

PHP uses superglobals `$_GET` and `$_POST` to collect form data.

  * **POST:** Secure, invisible to others (data sent in HTTP body). used for passwords/sensitive info.
  * **GET:** Data is visible in the URL (e.g., `page.php?id=10`). Used for bookmarks/search queries.

<!-- end list -->

```php
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect value of input field
    $name = htmlspecialchars($_REQUEST['fname']);
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo "Hello $name";
    }
}
?>
```

### **4. File Handling**

Reading and writing files on the server.

  * `fopen()`: Opens a file. Modes: `r` (read), `w` (write/overwrite), `a` (append).
  * `fread()`: Reads content.
  * `fclose()`: Closes the file (crucial for freeing resources).

<!-- end list -->

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile, filesize("webdictionary.txt"));
fclose($myfile);
?>
```

### **5. Date and Time**

The `date()` function formats a timestamp to a readable date and time.

```php
<?php
echo "Today is " . date("Y/m/d") . "<br>"; // 2023/10/25
echo "The time is " . date("h:i:sa");      // 08:15:30pm
?>
```

-----

## **Part 2: MySQL Basics & Connectivity**

MySQL is the database system used to store information. PHP needs a way to "talk" to MySQL.

### **1. Database Connectivity (The Modern Way)**

We use the **`mysqli`** (MySQL Improved) extension. It supports both Procedural and Object-Oriented styles.

**Connecting to the Database:**

```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// 1. Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// 2. Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
```

### **2. Executing SQL Queries**

Once connected, you use `$conn->query($sql)` to run SQL commands (INSERT, UPDATE, DELETE, SELECT).

**Selecting Data:**

```php
$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
```

-----

## **Part 3: Advanced Web Features**

### **1. Sessions (`$_SESSION`)**

A session stores user information on the server to be used across multiple pages (e.g., keeping a user logged in).

  * **Note:** `session_start()` must be the very first thing in your document, before any HTML tags.

<!-- end list -->

```php
<?php
session_start();

// Set session variables
$_SESSION["favcolor"] = "green";
$_SESSION["username"] = "JohnDoe";

// Access on another page
echo "User is " . $_SESSION["username"];

// Destroy session (Logout)
session_unset();
session_destroy();
?>
```

### **2. Cookies (`$_COOKIE`)**

Cookies are small text files stored on the **client's computer** (browser).

  * Used for remembering preferences (e.g., Light/Dark mode).

<!-- end list -->

```php
<?php
// setcookie(name, value, expire, path);
$cookie_name = "user";
$cookie_value = "John Doe";

// Cookie expires in 30 days (86400 seconds * 30)
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

// Check if cookie is set
if(isset($_COOKIE[$cookie_name])) {
    echo "User is " . $_COOKIE[$cookie_name];
}
?>
```

### **3. Sending E-mail**

PHP uses the `mail()` function. (Note: This requires a configured SMTP server, like Sendmail or Postfix, on your hosting environment).

```php
<?php
$to = "somebody@example.com";
$subject = "My Subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com";

mail($to, $subject, $txt, $headers);
?>
```

-----

## **Part 4: Integration (XML & AJAX)**

### **1. PHP and XML**

PHP provides the **SimpleXML** extension to parse XML files easily.

**Scenario:** You have a file `note.xml`.

```php
<?php
$xml = simplexml_load_file("note.xml") or die("Error: Cannot create object");

// Accessing nodes like object properties
echo $xml->to . "<br>";
echo $xml->from . "<br>";
echo $xml->body;
?>
```

### **2. PHP and AJAX**

This is the most powerful combination in modern web dev.

  * **Frontend (JS):** Sends a request.
  * **Backend (PHP):** Receives the request, processes data (maybe queries MySQL), and outputs the result.

**The PHP File (`gethint.php` - The Backend):**
This script listens for a GET request and simply outputs text.

```php
<?php
// Get the 'q' parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// Logic: lookup all hints from array if $q is different from ""
if ($q !== "") {
    $q = strtolower($q);
    $len = strlen($q);
    // (Imagine a $a array of names exists here)
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output the response
echo $hint === "" ? "no suggestion" : $hint;
?>
```

**The AJAX Request (Frontend):**

```javascript
function showHint(str) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    };
    // Calls the PHP file
    xhttp.open("GET", "gethint.php?q=" + str, true);
    xhttp.send();
}
```
---
#### You all caught up
### Thank You