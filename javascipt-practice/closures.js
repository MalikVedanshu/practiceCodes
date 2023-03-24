function outerFunction() {
  let x = 10;

  function innerFunction() {
    console.log(x);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // logs 10
