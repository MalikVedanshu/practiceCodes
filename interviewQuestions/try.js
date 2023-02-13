// function func1() {
    
//     func2();
//     console.log("In func1");
//   }
  
//   function func2() {
    
//     func3();
//     console.log("In func2");
//   }
  
//   function func3() {
//     console.log("In func3");
//   }
  
//   func1();

var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  var displayFullName = person.fullName();
  
  console.log(displayFullName); // Output: "undefined undefined"