# JS

# 1. Exploring the dev tools.

# 2. Data types in js
## Data Types in JavaScript

JavaScript has **8 basic data types**, categorized into **primitive** and **non-primitive (reference)** types.

---

## 🔷 Primitive Data Types (7 types)

### 1. **Number**
- Represents integers and floating-point numbers
- Range: ±(2⁵³ - 1)
- Special values: `Infinity`, `-Infinity`, `NaN` (Not a Number)

```javascript
let age = 25;
let price = 99.99;
let infinity = Infinity;
let notANumber = NaN;
```

### 2. **BigInt**
- For integers larger than 2⁵³ - 1
- Created by appending `n` to the end

```javascript
let bigNumber = 9007199254740991n;
let anotherBig = BigInt(12345678901234567890);
```

### 3. **String**
- Represents textual data
- Can use single quotes, double quotes, or backticks (template literals)

```javascript
let name = "John";
let greeting = 'Hello';
let template = `Hello ${name}`;  // Template literal
```

### 4. **Boolean**
- Logical values: `true` or `false`

```javascript
let isActive = true;
let isComplete = false;
```

### 5. **Undefined**
- A variable declared but not assigned a value
- Default value of uninitialized variables

```javascript
let x;           // undefined
console.log(x);  // undefined
```

### 6. **Null**
- Represents "nothing", "empty", or "unknown value"
- Must be explicitly assigned

```javascript
let empty = null;
```

### 7. **Symbol** (ES6)
- Unique and immutable primitive value
- Often used as object property keys

```javascript
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2);  // false
```

---

## 🔶 Non-Primitive (Reference) Type

### 8. **Object**
- Collections of key-value pairs
- Includes arrays, functions, dates, etc.

```javascript
// Object literal
let person = {
  name: "Alice",
  age: 30
};

// Array (special type of object)
let colors = ["red", "green", "blue"];

// Function (callable object)
function greet() {
  console.log("Hello!");
}

// Date object
let now = new Date();
```

---

## 📊 Type Checking

```javascript
typeof 42;              // "number"
typeof "hello";         // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object"  ⚠️ (historical bug)
typeof Symbol();        // "symbol"
typeof 123n;            // "bigint"
typeof {};              // "object"
typeof [];              // "object"
typeof function(){};    // "function"
```

---

## ⚠️ Important Differences

| Aspect | Primitive | Non-Primitive (Object) |
|--------|-----------|------------------------|
| **Storage** | Stored by value | Stored by reference |
| **Mutable** | Immutable | Mutable |
| **Comparison** | Compares value | Compares reference |
| **Copy** | Creates independent copy | Creates reference copy |

```javascript
// Primitive - independent
let a = 5;
let b = a;
b = 10;
console.log(a);  // 5 (unchanged)

// Object - reference
let obj1 = { value: 5 };
let obj2 = obj1;
obj2.value = 10;
console.log(obj1.value);  // 10 (changed!)
```

---

## 🎯 Quick Reference

| Type | Example | `typeof` Result |
|------|---------|-----------------|
| Number | `42` | `"number"` |
| BigInt | `42n` | `"bigint"` |
| String | `"hello"` | `"string"` |
| Boolean | `true` | `"boolean"` |
| Undefined | `undefined` | `"undefined"` |
| Null | `null` | `"object"` ⚠️ |
| Symbol | `Symbol()` | `"symbol"` |
| Object | `{}` | `"object"` |
| Array | `[]` | `"object"` |
| Function | `function(){}` | `"function"` |

---

> 💡 **Note**: JavaScript is **dynamically typed** - variables can hold any data type and change types at runtime.




# DOM (Data Object Model)