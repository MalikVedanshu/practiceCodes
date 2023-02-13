/*
    In JavaScript, scope refers to the accessibility of variables and functions within a program. 
    It determines where a variable can be accessed and used, and it can either be global or local.

    There are two types of scope in JavaScript:

    Global scope: Variables and functions declared outside of any function have a global scope and 
    can be accessed from anywhere in the code.
    For example:

    let globalVariable = "I am a global variable";

    function displayGlobalVariable() {
    console.log(globalVariable);
    }

    displayGlobalVariable(); // Output: I am a global variable

    Local scope: Variables and functions declared inside a function have a local scope and can only be 
    accessed from within that function.
    For example:

    function displayLocalVariable() {
    let localVariable = "I am a local variable";
    console.log(localVariable);
    }

    displayLocalVariable(); // Output: I am a local variable
    console.log(localVariable); // ReferenceError: localVariable is not defined

    In this example, the variable localVariable is only accessible inside the displayLocalVariable function, 
    and an error is thrown when trying to access it from the global scope.

    Scope is an important concept in JavaScript, as it affects how variables and functions are defined and used. 
    By understanding scope, you can write better structured and more maintainable code.

*/