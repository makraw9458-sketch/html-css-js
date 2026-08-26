# Complete HTML Tag List (The 80% Essentials)


## Document Structure
| Tag | Description |
|-----|-------------|
| `<!DOCTYPE html>` | Declares HTML5 document type |
| `<html>` | Root element of the page |
| `<head>` | Contains metadata (not visible) |
| `<title>` | Sets the browser tab title |
| `<body>` | Contains all visible content |

---

## Meta Tags (Inside `<head>`)
| Tag | Description |
|-----|-------------|
| `<meta charset="UTF-8">` | Sets character encoding |
| `<meta name="viewport" ...>` | Makes page responsive on mobile |
| `<meta name="description" ...>` | SEO: page description |
| `<meta name="keywords" ...>` | SEO: keywords (less used now) |

---

## Text & Formatting
| Tag | Description |
|-----|-------------|
| `<h1>` to `<h6>` | Headings (h1 = most important) |
| `<p>` | Paragraph |
| `<br>` | Line break (self-closing) |
| `<strong>` | Important text (bold) |
| `<em>` | Emphasized text (italic) |
| `<span>` | Inline container for styling |

---

## Links & Images
| Tag | Description |
|-----|-------------|
| `<a>` | Anchor / Hyperlink |
| `<img>` | Image (self-closing) |

---

## Lists
| Tag | Description |
|-----|-------------|
| `<ul>` | Unordered (bulleted) list |
| `<ol>` | Ordered (numbered) list |
| `<li>` | List item |

---

## Tables
| Tag | Description |
|-----|-------------|
| `<table>` | Creates a table |
| `<thead>` | Table header group |
| `<tbody>` | Table body group |
| `<tr>` | Table row |
| `<th>` | Table header cell |
| `<td>` | Table data cell |

---

## Forms
| Tag | Description |
|-----|-------------|
| `<form>` | Form container |
| `<label>` | Label for an input |
| `<input>` | Input field (self-closing) |
| `<textarea>` | Multi-line text input |
| `<select>` | Dropdown menu |
| `<option>` | Option inside a dropdown |
| `<button>` | Clickable button |

### Input Types (Common)
| Type | Description |
|------|-------------|
| `type="text"` | Single-line text |
| `type="email"` | Email input (validates) |
| `type="password"` | Masks characters |
| `type="radio"` | Select one option |
| `type="checkbox"` | Select multiple options |
| `type="submit"` | Submits the form |

---

## Semantic Layout (HTML5)
| Tag | Description |
|-----|-------------|
| `<header>` | Top section of page or section |
| `<nav>` | Navigation links |
| `<main>` | Main content (only ONE per page) |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained content (blog post, news) |
| `<aside>` | Sidebar / tangential content |
| `<footer>` | Bottom section of page |

---

## Generic Containers
| Tag | Description |
|-----|-------------|
| `<div>` | Block-level container (generic) |
| `<span>` | Inline container (generic) |

---

## Comments & Special Characters
| Syntax | Description |
|--------|-------------|
| `<!-- comment -->` | HTML comment (not visible) |
| `&lt;` | Less than `<` |
| `&gt;` | Greater than `>` |
| `&amp;` | Ampersand `&` |
| `&copy;` | Copyright symbol `©` |

---

## Quick Attributes to Know
| Attribute | Used On | Description |
|-----------|---------|-------------|
| `href` | `<a>` | Link destination URL |
| `src` | `<img>` | Image file path |
| `alt` | `<img>` | Alternative text (accessibility) |
| `width` / `height` | `<img>` | Image dimensions |
| `class` | Any | CSS styling hook |
| `id` | Any | Unique identifier |
| `for` | `<label>` | Links label to input by `id` |
| `name` | `<input>` | Identifies form data on submit |
| `value` | `<input>` | Default or submitted value |
| `type` | `<input>` | Defines input behavior |
| `placeholder` | `<input>` | Hint text inside field |
| `required` | `<input>` | Makes field mandatory |
| `target="_blank"` | `<a>` | Opens link in new tab |
| `action` | `<form>` | Where to send form data |
| `method` | `<form>` | HTTP method (GET/POST) |

---

### Total: **39 tags + 14 input types/attributes = ~50 items**

That's literally the **entire toolkit** you need to build 80%+ of all websites. Everything else is either very niche or a combination/variation of these! 🚀

## Site reference for list of tags.
https://www.w3schools.com/tags/ref_byfunc.asp