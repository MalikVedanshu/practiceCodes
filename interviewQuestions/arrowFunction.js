/*

    Chat gpt reply

    Arrow functions, also known as "fat arrow" functions, are a more concise syntax for writing function expressions in JavaScript. 
    Arrow functions were introduced in ECMAScript 6 (ES6) and are a way to write anonymous functions in a shorter and more readable form.

    The basic syntax of an arrow function is as follows:

    (param1, param2, ...) => { statements }

    For example, consider the following code:

    let sum = (a, b) => {
        return a + b;
    };
    This is equivalent to the following function expression:

    let sum = function (a, b) {
        return a + b;
    };
    One of the key differences between arrow functions and regular functions is that arrow functions have a lexical this value, 
    which means that the value of this is determined by the context in which the arrow function is defined, 
    rather than by the calling context. This can be useful in situations where you need to pass a method as a callback, 
    as the value of this will remain the same inside the arrow function as it was outside.

    For example:

    let obj = {
        name: 'John Doe',
        greet: () => {
            console.log(`Hello, my name is ${this.name}`);
        }
    };

    In this example, the value of this inside the greet method will always refer to the obj object, 
    even if the method is called in a different context

*/

let obj = {
    name: 'John Doe',
    greet: () => {
      console.log(`Hello, my name is ${this.name}`);
    }
  };

  let sum = (a, b) => {
    return a + b;
  };