# The Complete HTML Walkthrough: The 80% You Use Every Day

## 1. The Big Picture: What is HTML?
HTML (HyperText Markup Language) is the skeleton of the web. It is not a programming language; it is a **markup language**. We use "tags" to describe the content (e.g., "This is a heading," "This is a paragraph," "This is a link").

**Key Concept:** Everything is about **Semantics** (meaning). We choose tags based on what the content *is*, not just how it looks.

---

## 2. The Skeleton of Every HTML Document
Every HTML page has a standard, non-negotiable structure. This tells the browser how to interpret the file.

```html
<!DOCTYPE html> <!-- 1. Declares this is HTML5 -->
<html lang="en"> <!-- 2. The root element. 'lang' is important for accessibility. -->
<head> <!-- 3. The "Brain": Metadata, title, CSS links. NOT visible on the page. -->
    <meta charset="UTF-8"> <!-- Character encoding (handles special characters) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive design essential -->
    <title>My Web Page</title> <!-- Shows in the Browser Tab -->
</head>
<body> <!-- 4. The "Body": EVERYTHING visible to the user goes here. -->

    <!-- All content goes here -->

</body>
</html>
```

---

## 3. The Core 5: Semantic Layout & Text
These tags represent 70% of the text you will ever write.

### Headings (`<h1>` to `<h6>`)
Used for titles and subheadings. **Important:** Only one `<h1>` per page (for SEO).
```html
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Sub-section Title</h3>
```

### Paragraphs (`<p>`) & Line Breaks (`<br>`)
```html
<p>This is a normal block of text. Browsers ignore extra spaces in the code.</p>
<p>This is a second paragraph. There is a natural gap between them.</p>
Text can just exist, but it's best practice to wrap it in a <p> tag.
<br> <!-- This forces text to the next line (Self-closing) -->
```

### Strong (`<strong>`) & Emphasis (`<em>`)
Used to add meaning (not just bold/italic).
```html
<p>This is <strong>very important</strong> and this is <em>emphasized</em>.</p>
```

---

## 4. Lists: Organizing Data
Lists are crucial for navigation menus, instructions, and structured data.

### Unordered List (Bullet points)
```html
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
</ul>
```

### Ordered List (Numbered)
```html
<ol>
    <li>Turn on the computer</li>
    <li>Open the browser</li>
    <li>Navigate to the URL</li>
</ol>
```

---

## 5. Links: The "H" in HTML (HyperText)
The `<a>` (Anchor) tag is how we navigate the web.

```html
<!-- Absolute URL (Going to a different website) -->
<a href="https://www.google.com">Go to Google</a>

<!-- Relative URL (Navigating within YOUR site) -->
<a href="about.html">About Us</a>

<!-- Open in a new tab -->
<a href="https://www.example.com" target="_blank">Open in New Tab</a>

<!-- Link to an email -->
<a href="mailto:info@example.com">Email Us</a>
```

---

## 6. Images (`<img>`): Visual Content
Images are self-closing tags. They **require** `src` and `alt`.

```html
<!-- 'alt' is MANDATORY for accessibility and broken image fallback -->
<img src="images/photo.jpg" alt="A beautiful sunset over the mountains">

<!-- Width and Height (in pixels) help prevent layout shifting -->
<img src="logo.png" alt="Company Logo" width="200" height="100">
```

---

## 7. Structural Containers: Divs & Spans
These are the "lego blocks" of layout.

- `<div>`: A **block-level** container. It takes up the full width. Used for major sections (headers, footers, sidebars).
- `<span>`: An **inline** container. It sits inside a line of text. Used for styling small pieces of text.

```html
<div class="header"> <!-- We use classes to target them with CSS -->
    <h1>Welcome</h1>
</div>

<p>This is a <span class="highlight">highlighted</span> word.</p>
```

---

## 8. Tables: Tabular Data
Use tables only for **data** (like spreadsheets), NOT for layout.

```html
<table>
    <thead> <!-- Table Header (optional but recommended) -->
        <tr> <!-- Table Row -->
            <th>Name</th> <!-- Table Header Cell (bold) -->
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td> <!-- Table Data Cell -->
            <td>30</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

---

## 9. Forms: Collecting User Input (The Big One)
Forms are how we get data from the user (logins, searches, surveys).

```html
<form action="/submit-form" method="POST">
    
    <!-- Label: Connects to the input via 'for' and 'id' -->
    <label for="username">Username:</label>
    
    <!-- Input: The workhorse. 'type' changes its behavior -->
    <input type="text" id="username" name="username" placeholder="Enter your name">
    
    <label for="user_email">Email:</label>
    <input type="email" id="user_email" name="email" required> <!-- 'required' makes it mandatory -->

    <label for="password">Password:</label>
    <input type="password" id="password" name="pwd">

    <!-- Textarea: Multi-line text -->
    <label for="bio">Biography:</label>
    <textarea id="bio" name="bio" rows="4" cols="50"></textarea>

    <!-- Radio Buttons (Choose ONE) -->
    <p>Gender:</p>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>

    <!-- Checkboxes (Choose MANY or Zero) -->
    <p>Hobbies:</p>
    <input type="checkbox" id="sports" name="hobby" value="sports">
    <label for="sports">Sports</label>
    <input type="checkbox" id="music" name="hobby" value="music">
    <label for="music">Music</label>

    <!-- Dropdown Select -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
    </select>

    <!-- The Submit Button -->
    <button type="submit">Send Form</button>

</form>
```

---

## 10. Semantic HTML5 Tags (The Modern Way)
Instead of using `<div>` for everything, use these specific tags for better SEO and accessibility.

```html
<header> <!-- Top of the page / section -->
    <nav> <!-- Navigation links -->
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>

<main> <!-- The main content of the page (Only ONE per page) -->
    <section> <!-- A distinct thematic grouping (e.g., "Services") -->
        <h2>Our Services</h2>
        <article> <!-- Self-contained content (e.g., a blog post, news item) -->
            <h3>Service 1</h3>
            <p>Description.</p>
        </article>
    </section>
    <aside> <!-- Sidebar content (tangential to the main content) -->
        <p>Related links or ads.</p>
    </aside>
</main>

<footer> <!-- Bottom of the page -->
    <p>Copyright 2024</p>
</footer>
```

---

## 11. The "Misc" but Essential 5%

### A. Comments
Not visible to the user. Essential for reminding yourself or your team what the code does.
```html
<!-- This is a comment. It helps developers. -->
```

### B. Meta Tags (Moving beyond charset)
Used to describe the page to search engines (SEO).
```html
<meta name="description" content="A free tutorial on HTML basics.">
<meta name="keywords" content="HTML, Web Development, Tutorial">
```

### C. Special Characters (HTML Entities)
To display characters reserved in HTML.
```html
<p>5 &lt; 10 (Less than sign)</p> <!-- < -->
<p>10 &gt; 5 (Greater than sign)</p> <!-- > -->
<p>&amp; (Ampersand)</p> <!-- & -->
<p>&copy; 2024 (Copyright)</p> <!-- © -->
```

---

## Teaching Note & Activity

**The "Build a Personal Profile Page" Exercise:**

1.  **Structure:** Use `<!DOCTYPE>`, `<html>`, `<head>` (with title and meta viewport), and `<body>`.
2.  **Header:** Use `<header>` and `<h1>` for your name.
3.  **Navigation:** Create a `<nav>` with an unordered list (`<ul>`) linking to `#about`, `#hobbies`, and `#contact`.
4.  **Main:** Use `<main>` containing two `<section>`s: "About Me" (with a paragraph `<p>` and an `<img>`) and "My Favorite Things" (with an unordered list).
5.  **Form:** Add a contact section with a `<form>` containing `text`, `email`, a `<textarea>`, and a `<button>`.
6.  **Footer:** Add a `<footer>` with a copyright symbol (`&copy;`).

**This exercise forces them to use 90% of the topics above in one shot.**