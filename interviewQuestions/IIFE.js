/*
    IIFE stands for Immediately Invoked Function Expression. It's a JavaScript design pattern that allows you to execute a function immediately after it's defined, without having to call it explicitly. This makes it useful for creating private scopes and avoiding naming collisions in your code.

    An IIFE is defined using the following syntax:

   
    (function () {
    // code here
    })();
    The function is defined inside a pair of parentheses, and it's immediately invoked by adding another pair of parentheses at the end. This makes the function a self-executing anonymous function.

    For example:

    
    (function () {
    let message = "Hello from IIFE!";
    console.log(message);
    })();

    // Output: Hello from IIFE!
    In this example, the code inside the IIFE has its own private scope, which means that the variable message is not accessible from the outside. This makes it a great way to define and execute code that doesn't pollute the global scope.

    You can also pass arguments to an IIFE by passing them as arguments to the self-executing function:

    
    (function (name) {
    let message = `Hello from IIFE, ${name}!`;
    console.log(message);
    })("John");

    // Output: Hello from IIFE, John!
    This allows you to reuse the same IIFE with different inputs, making it a powerful tool in your JavaScript toolbox.

*/