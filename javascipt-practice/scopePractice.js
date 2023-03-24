
// function printVal() {
// 	return x;
// }

// const x  = 10;

// console.log(printVal())

// function printY() {

// return y;
// }
// var y = 12;
// let printval = printY();
// console.log(printval);

// function addTwo() {
// var p = 12;
// var q = "1";
// return p + q;
// }
// console.log(addTwo());


function outerFunction() {
	var x = 10;

  function innerFunction() {
    console.log(x);
	var x = 11;
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // logs 10
