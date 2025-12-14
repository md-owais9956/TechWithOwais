---
layout: ../../../layouts/TechLessonLayout.astro
title: "Unit 4: XML and AJAX  "
description: "XML and AJAX"
pubDate: "2025-12-14"
category: "webdev"
level: "Beginner"
# heroImage: "/images/my-image.png" 
updatedDate: "2025-12-14"           
---


## **Part 1: PL/SQL (Procedural Language/Structured Query Language)**

PL/SQL is Oracle's procedural extension to SQL. It allows you to write complex logic, loops, and error handling directly in the database.

### **1. Declaring PL/SQL Variables**

Every PL/SQL unit works in **Blocks**. Variables must be declared in the `DECLARE` section before they are used.

  * **Syntax:** `variable_name datatype [NOT NULL] [:= initial_value];`
  * **Common Data Types:** `NUMBER`, `VARCHAR2`, `DATE`, `BOOLEAN`.

<!-- end list -->

```sql
DECLARE
    v_employee_name VARCHAR2(50);
    v_salary        NUMBER(8, 2) := 50000.00; -- Initialized variable
    v_is_active     BOOLEAN := TRUE;
    v_hire_date     DATE;
BEGIN
    -- Code goes here
    NULL;
END;
/
```

### **2. Writing Executable Statements**

The `BEGIN` and `END` block contains the logic. You can use conditional statements (`IF`) and loops.

```sql
DECLARE
    v_score NUMBER := 85;
    v_grade CHAR(1);
BEGIN
    -- IF-THEN-ELSIF Logic
    IF v_score >= 90 THEN
        v_grade := 'A';
    ELSIF v_score >= 80 THEN
        v_grade := 'B';
    ELSE
        v_grade := 'C';
    END IF;

    -- Output to console (requires SERVEROUTPUT ON)
    DBMS_OUTPUT.PUT_LINE('Grade is: ' || v_grade);
END;
/
```

### **3. Using SQL Statements Within PL/SQL**

You can run SQL (SELECT, INSERT, UPDATE, DELETE) inside a PL/SQL block.

  * **SELECT INTO:** strictly used to fetch **one single row** into variables.

<!-- end list -->

```sql
DECLARE
    v_emp_name VARCHAR2(100);
    v_emp_sal  NUMBER;
BEGIN
    -- Fetching data from a table into variables
    SELECT first_name, salary 
    INTO v_emp_name, v_emp_sal
    FROM employees
    WHERE employee_id = 101;

    -- Update statement within PL/SQL
    UPDATE employees 
    SET salary = salary + 1000 
    WHERE employee_id = 101;
    
    COMMIT; -- Save changes
END;
/
```

-----

## **Part 2: XML (Extensible Markup Language)**

XML is designed to **store and transport data**. Unlike HTML (which displays data), XML tags are not predefined; you invent your own.

### **1. XML Basics**

XML must have a single root element and properly closed tags.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="fiction">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <price>29.99</price>
  </book>
</bookstore>
```

### **2. Parsers & DOM (Document Object Model)**

To read XML code, software uses a **Parser**.

  * **DOM Parser:** Loads the *entire* XML into memory as a tree structure. You can traverse nodes (Parent -\> Child).
  * **SAX Parser:** (Simple API for XML) Reads the XML sequentially (event-based). Faster, but you can't go "backwards".

### **3. XPath**

XPath is a syntax for finding elements in an XML document (like SQL for XML).

  * `/bookstore/book` selects all book elements.
  * `//title` selects all title elements anywhere in the document.
  * `/bookstore/book[price>30]` selects books with a price over 30.

### **4. XSL & XSLT**

  * **XSL:** Extensible Stylesheet Language.
  * **XSLT (Transformations):** Used to transform XML into other formats (like converting XML data into an HTML table for a website).

### **5. XQuery**

XQuery is to XML what SQL is to databases. It is a functional language to query XML data.

```xquery
for $x in doc("books.xml")/bookstore/book
where $x/price > 30
order by $x/title
return $x/title
```

### **6. DTD vs. Schema**

These are used to **validate** the structure of an XML file (ensure it has the right fields).

  * **DTD (Document Type Definition):** The old way. Uses specific non-XML syntax.
  * **XML Schema (XSD):** The modern way. Written in XML syntax. It supports data types (e.g., ensuring "price" is actually a number).

### **7. Namespaces**

Used to avoid element name conflicts when mixing XML from different sources.

```xml
<h:table xmlns:h="http://www.w3.org/TR/html4/">
  <h:tr>
    <h:td>Apples</h:td>
  </h:tr>
</h:table>
```

-----

## **Part 3: AJAX (Asynchronous JavaScript and XML)**

AJAX is not a programming language. It is a technique to update parts of a web page without reloading the whole page.

### **1. Basics: Request and Response**

1.  **Event:** A user clicks a button.
2.  **Request:** JavaScript creates an `XMLHttpRequest` object and sends data to a server asynchronously (in the background).
3.  **Server:** Processes data and sends a response back.
4.  **Response:** JavaScript receives the data and updates the HTML DOM.

### **2. AJAX using JavaScript (The "Vanilla" Way)**

This uses the standard `XMLHttpRequest` object.

```javascript
function loadData() {
    // 1. Create Object
    var xhttp = new XMLHttpRequest();
    
    // 2. Define what happens when response loads
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    
    // 3. Open connection (Method, URL, Async=True)
    xhttp.open("GET", "data.txt", true);
    
    // 4. Send Request
    xhttp.send();
}
```

### **3. AJAX using XML**

Traditionally, the server responded with XML format (hence the name AJA**X**), though JSON is more common today.

**JavaScript parsing the XML Response:**

```javascript
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var xmlDoc = this.responseXML;
        var title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        document.getElementById("output").innerHTML = title;
    }
};
```

### **4. AJAX using jQuery**

jQuery simplifies AJAX drastically, handling browser compatibility and syntax for you.

  * **Syntax:** `$.ajax({name:value, name:value, ... })`

<!-- end list -->

```javascript
$(document).ready(function(){
    $("#btnLoad").click(function(){
        $.ajax({
            url: "demo_test.txt", 
            success: function(result){
                $("#div1").html(result);
            },
            error: function(xhr){
                alert("An error occurred: " + xhr.status + " " + xhr.statusText);
            }
        });
    });
});
```

-----

### **Summary Table**

| Concept | Key Technology | Primary Use |
| :--- | :--- | :--- |
| **PL/SQL** | Oracle DB | Writing logic (loops, if/else) inside the database. |
| **XML** | Markup Tags | Storing and transporting data in a tree structure. |
| **XSLT** | Transformation | Converting XML into HTML or other formats. |
| **AJAX** | JS + HTTP | Updating a webpage without reloading it. |


---
### **You caught everything **
> If You want a deeper look of these topics you can continue


-----

##  Part 1: Deeper Dive into PL/SQL

PL/SQL is crucial for database performance and security because it brings the processing logic right next to the data.

### 1\. **Data Types and Anchored Declarations**

While basic types like `VARCHAR2` are standard, professional PL/SQL uses **anchored declarations** (`%TYPE`) for robustness.

  * **Benefit:** If the data type of the `employees.salary` column changes in the future (e.g., from `NUMBER(8, 2)` to `NUMBER(10, 2)`), the PL/SQL code automatically adapts without requiring a manual change.

<!-- end list -->

```sql
DECLARE
    -- Standard Declaration
    v_employee_id NUMBER(6);
    
    -- Anchored Declaration (Best Practice)
    v_emp_name employees.first_name%TYPE; 
    v_emp_salary employees.salary%TYPE;
    
    -- Record Type Declaration (To hold an entire row)
    r_emp_record employees%ROWTYPE; 
BEGIN
    NULL;
END;
/
```

### 2\. **Cursors and Iteration**

When an SQL `SELECT` statement returns **more than one row**, you must use a **Cursor** to process the results one row at a time. This is where procedural logic meets set-based SQL.

  * **Explicit Cursors:** Declared, opened, fetched, and closed manually.
  * **Cursor FOR Loop (Best Practice):** Oracle handles the opening, fetching, and closing automatically, leading to cleaner code.

<!-- end list -->

```sql
-- Example of a Cursor FOR Loop
DECLARE
    CURSOR c_high_salary_employees IS
        SELECT first_name, salary 
        FROM employees
        WHERE salary > 10000;
BEGIN
    -- This loop implicitly opens, fetches, and closes the cursor
    FOR emp_rec IN c_high_salary_employees LOOP
        DBMS_OUTPUT.PUT_LINE(emp_rec.first_name || ' earns ' || emp_rec.salary);
        -- Logic can be applied here for each row
    END LOOP;
END;
/
```

### 3\. **Procedures and Functions (Stored Program Units)**

The real power of PL/SQL comes from creating reusable objects that live in the database.

| Feature | Procedures | Functions |
| :--- | :--- | :--- |
| **Purpose** | To perform an **action** (e.g., update a status, insert data). | To calculate and **return a single value**. |
| **Return Value** | Does **not** return a value (only uses `OUT` parameters). | **Must** return a value of a specific data type. |
| **Usage in SQL** | Cannot be called directly in a `SELECT` or `WHERE` clause. | Can often be used directly in SQL statements. |

-----

##  Part 2: Deeper Dive into XML & Data Mapping

XML's complexity lies in how data is structured and validated.

### 1\. **XML Schema Definition (XSD)**

XSD is the successor to DTD. It is much more powerful because it enforces **data types** and **cardinality** (how many times an element can appear).

  * **Simple Type:** Defines data for an element that has no attributes or child elements (e.g., an `<age>` element must contain an integer).
  * **Complex Type:** Defines data for an element that contains attributes and/or child elements (e.g., the `<book>` element).

<!-- end list -->

```xml
<xs:element name="price">
  <xs:simpleType>
    <xs:restriction base="xs:decimal">
      <xs:fractionDigits value="2"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

### 2\. **XPath Axes**

Beyond basic pathing, XPath uses **axes** to navigate the XML tree relative to the current node.

| Axis Name | Description | Example |
| :--- | :--- | :--- |
| **`parent::`** | Selects the parent of the current node. | `//book/parent::*` (Selects the `<bookstore>`) |
| **`ancestor::`** | Selects all ancestors (parent, grandparent, etc.). | `//title/ancestor::bookstore` |
| **`following-sibling::`** | Selects all siblings *after* the current node. | `//title/following-sibling::price` |

### 3\. **SAX vs. DOM Trade-offs**

The choice of XML parser depends entirely on the use case.

| Parser | Advantage | Disadvantage | Ideal Use Case |
| :--- | :--- | :--- | :--- |
| **DOM** | Allows random access and manipulation of the data. | Very memory-intensive (must load the entire document). | Small, frequently accessed configuration files. |
| **SAX** | Very fast and memory-efficient (reads stream-by-stream). | Cannot traverse backwards; no random access. | Extremely large log files or data feeds. |

-----

##  Part 3: Deeper Dive into AJAX & Modern Practices

AJAX is the foundation of modern **Single Page Applications (SPAs)**, which load resources dynamically without a full refresh.

### 1\. **The `readyState` and HTTP Status**

The core of the `XMLHttpRequest` object depends on these two properties:

| `readyState` Value | Description |
| :--- | :--- |
| **0 (UNSENT)** | `open()` has not yet been called. |
| **1 (OPENED)** | `open()` has been called. |
| **2 (HEADERS\_RECEIVED)** | `send()` has been called, and headers are available. |
| **3 (LOADING)** | Downloading the response (partial data available). |
| **4 (DONE)** | **The operation is complete.** |

The handler checks for `readyState == 4` (Done) and `status == 200` (OK) to confirm success.

### 2\. **JSON (JavaScript Object Notation)**

Although the 'X' in AJAX stands for XML, **JSON** is now the dominant format for data transfer due to its lightweight nature and native compatibility with JavaScript.

| Feature | XML | JSON |
| :--- | :--- | :--- |
| **Syntax** | Verbose, requires closing tags, is document-centric. | Clean, uses key/value pairs, is data-centric. |
| **Parsing** | Requires a parser object (DOM or SAX). | Native to JavaScript (`JSON.parse()`). |

### 3\. **The Fetch API (Modern AJAX)**

The native `XMLHttpRequest` object has largely been superseded by the modern **Fetch API** in modern JavaScript, which uses **Promises** for cleaner asynchronous handling.

```javascript
// Modern AJAX using Fetch and Promises
function fetchDataModern(url) {
    fetch(url)
        .then(response => {
            // Check if HTTP status is OK (200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the response body as JSON
            return response.json(); 
        })
        .then(data => {
            console.log('Data received:', data);
            // Update DOM with the data
        })
        .catch(error => {
            console.error('Fetch failed:', error);
        });
}
```

The Fetch API is much easier to read and manages the asynchronous flow better than the old callback-based `XMLHttpRequest`.
