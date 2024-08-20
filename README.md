# React_W3

Welcome to my React learning repository! This project is a record of my journey as I learn the basics of React.  
Each commit represents a new concept or feature I've learned, and this README file is regularly updated to reflect my progress.

# Table of Content

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)

## Introduction

### What is React?

React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.

React is a tool for building UI components.

### How does React Works?

- #### React creates a VIRTUAL DOM in memory.
  Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
- #### React only changes what needs to be changed!
  React finds out what changes have been made, and changes only what needs to be changed.

## Getting Started

- ### Use React in HTML Using CDN

  To Use React in Html You need these three scripts

_Paste these lines inside the head tag in .html file_

```html
<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  crossorigin
></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

You can write your react code in html inside script tag

like this:

```html
<body>
  <div id="mydiv"></div>

  <script type="text/babel">
    function Hello() {
      return <h1>Hello World!</h1>;
    }

    const container = document.getElementById("mydiv");
    const root = ReactDOM.createRoot(container);
    root.render(<Hello />);
  </script>
  <body></body>
</body>
```

**or**

write it in a seprate folder by passing this script src in body

```html
<script type="text/babel" src="script.js"></script>
```

You can get the Code here [Getting started](./getting_started/)
