# React_W3

Welcome to my React learning repository! This project is a record of my journey as I learn the basics of React.  
Each commit represents a new concept or feature I've learned, and this README file is regularly updated to reflect my progress.

# Table of Content

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [ES6 Features](#ES6-features)
4. [JSX](#jsx)
5. [Functional Components](#functional-components)
6. [Props](#props)
7. [Events](#events)

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
You can See the Output [here](https://varunthapa777.github.io/React_W3/getting_started/index.html)

- ### Create React App using Vite 

You can create react app using [vite](https://vitejs.dev/) build tool.

To create react app using vite you have [node](https://nodejs.org/en) install in your system.

*Run the below Command in terminal in the directory where you want to install react app*
```bash
npx create-vite@latest 
```

*Run react app using below command after **npm install** command*
```bash
npm run dev
```

*You can build the react app using below command*
```bash
npm run build
```

## ES6 Features

React uses [ES6](https://www.geeksforgeeks.org/introduction-to-es6/), and you should be familiar with some of the new features like:  
- [Classes](#classes)
- [Arrow Function](#arrow-function)
- [Variables (let, const, var)](#variables)
- [Array Methods like .map()](#array-methods)
- [Destructuring](#destructuring)
- [Ternary Operator](#ternary-operator)
- [Spread Operator](#spread-operator)

### Classes
```javascript
//define class 
class Person {

    //define constructor
    constructor(name) {
        this.name = name;
    }

    //define method
    sayName() {
        console.log(this.name);
    }
}

//create object of class
let person = new Person('varun');

//access method of class
person.sayName(); 

//access property of class
console.log("Name: ",person.name); 


//inheritance

//define class that extends another class
class Employee extends Person {
    constructor(name, department) {

        //call parent class constructor
        super(name);

        this.department = department;
    }

    getDepartment() {
        console.log(this.department);
    }
}

let employee = new Employee('varun', 'IT');

employee.sayName();
employee.getDepartment();

console.log("Employee Name: ", employee.name);
console.log("Employee Department: ", employee.department);
```


### Arrow Function

Syntax of arrow function
```javascript
greet = () =>{console.log("hello world");} 
```


### Variables

- **var** : mutable and have function scope
- **let** : mutable and have block scope
- **const** : immutable and have block scope


### Array Methods

- **Map function Example**
```javascript
let nums = [1,2,3,4,5];

//map function return a new modified array
let squares = nums.map(n => n * n);

console.log(squares); //Output: [1, 4, 9, 16, 25]
```


### Destructuring

```javascript
let student_marks = [40, 50, 60, 70];

//destructuring

let [maths, science, english, history] = student_marks;

console.log("Maths: ", maths);
console.log("Science: ", science);
console.log("English: ", english);
console.log("History: ", history);
```

### Ternary Operator
```javascript
const age = 18;
let isValid = age >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote';

console.log(isValid); //Output: You are eligible to vote
```

### Spread Operator

```javascript
let arr1 = [1,2,4];
let arr2 = [5,6,7];

let arr3 = [...arr1, ...arr2];
console.log(arr3); //Output: [1, 2, 4, 5, 6, 7]
```

## JSX - Javascript XML

JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

*Example:*
```javascript
function hello(){
  return <h1> Hello </h1>
}
```

## Functional Components

*MyButton.jsx*
```javascript
const MyButton = () => {
    return ( <button style={{background: 'skyblue', fontSize: '20px', borderRadius: 4}} >Click Me</button> );
}

export default MyButton;
```

check code in this [folder](./first-react-app/)


## Props 

props stands for properties.

Props are arguments passed into React components.

*MyButton.jsx*
```javascript
const MyButton = (props) => {
    return ( <button style={{background: props.color, fontSize: '20px', borderRadius: 4}} >Click Me</button> );
}

export default MyButton;
```

*App.jsx*
```html
<MyButton color="red" />
<MyButton color="green" />
<MyButton color="blue" />
```

## Events

*onClick Event*

[MyButton.jsx](./first-react-app\src\components\MyButton.jsx)

[App.jsx](./first-react-app\src\App.jsx)