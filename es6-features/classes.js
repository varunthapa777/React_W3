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

/*
Output:
varun
Name:  varun
varun
IT
Employee Name:  varun
Employee Department:  IT
*/ 

