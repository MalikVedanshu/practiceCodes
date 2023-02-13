/*
    Chat gpt reply:-

    In JavaScript, call, apply, and bind are methods available on all function objects that allow you to call a function 
    with a specified this value. They can be useful for borrowing methods from one object to use on another, 
    or for setting the this value when passing a function as an argument to another function.

    Here's a brief overview of each method:

    call: Invokes a function with a specified this value and arguments passed individually.
    Syntax:

    func.call(thisArg, arg1, arg2, ...)
    apply: Invokes a function with a specified this value and arguments passed as an array.
    Syntax:

    func.apply(thisArg, [argsArray])
    bind: Returns a new function with a specified this value and arguments, bound to the original function. 
    The new function can be invoked later on.
    Syntax:

    func.bind(thisArg, arg1, arg2, ...)
    For example:

    let obj1 = { name: "John" };
    let obj2 = { name: "Jane" };

    function greeting() {
    return "Hello " + this.name;
    }

    let greetingJohn = greeting.bind(obj1);
    let greetingJane = greeting.call(obj2);
    let greetingBob = greeting.apply({ name: "Bob" });

    console.log(greetingJohn()); // Hello John
    console.log(greetingJane()); // Hello Jane
    console.log(greetingBob()); // Hello Bob
    
    In this example, we have a function greeting that returns a greeting message with the name property of its this value. 
    We then use bind, call, and apply to invoke the function with different this values. 
    The result is that we get three different greeting messages, each with a different name.

*/



