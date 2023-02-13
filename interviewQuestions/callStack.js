/*

The call stack is a data structure used by JavaScript (and many other programming languages) to keep track of the function 
calls that are executed in your code. It's essentially a stack of functions, with the most recently called function at the 
top of the stack, and the first called function at the bottom.

Each time a function is called, it's added to the top of the call stack. When a function returns, 
it's removed from the top of the stack. This allows the JavaScript runtime to keep track of which function is currently executing, 
and which functions are waiting to be executed.

For example, consider the following code:

function func1() {
  console.log("In func1");
  func2();
}

function func2() {
  console.log("In func2");
  func3();
}

function func3() {
  console.log("In func3");
}

func1();

When this code is executed, the call stack would look like this:

    func1 is called and added to the top of the stack
    func1 calls func2, which is added to the top of the stack
    func2 calls func3, which is added to the top of the stack
    func3 finishes executing, and is removed from the top of the stack
    func2 finishes executing, and is removed from the top of the stack
    func1 finishes executing, and is removed from the top of the stack

        The call stack allows the JavaScript runtime to keep track of the function calls and ensure that they are executed 
        in the correct order. When an error occurs, the JavaScript runtime can use the call stack to determine 
        where the error occurred, and provide a stack trace that can be used to debug the code.
*/

function func1() {
    console.log("In func1");
    func2();
  }
  
  function func2() {
    console.log("In func2");
    func3();
  }
  
  function func3() {
    console.log("In func3");
  }
  
  func1();