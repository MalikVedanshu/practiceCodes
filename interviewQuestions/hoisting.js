/*

Chat gpt reply

Hoisting is a mechanism in JavaScript where variables and function declarations are moved to the top of their respective scopes 

(either the global scope or the function scope) before the code is executed. In other words, 
variables declared with the "var" keyword and function declarations are hoisted to the top of their scope, 
so they can be referenced before they are declared in the code.

For example, consider the following code:

console.log(x);
var x = 10;

Even though the variable x is declared after it is referenced in the code, the code will not throw an error because of hoisting. 
The JavaScript engine will effectively "hoist" the declaration of x to the top of the code, so that it looks like this:

var x;
console.log(x);
x = 10;

It's important to note that while hoisting moves the declarations to the top, 
it does not initialize the variables. In the example above, the value of x is undefined when it is first logged to the console, 
and it is only given a value of 10 later in the code.

*/

console.log(x);
var x = 10;


// var x;
// console.log(x);
// x = 10;