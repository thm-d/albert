// left or rightOperand function
// if no operation, returns the value associated with the function name
// otherwise we return the function initially passed as a parameter with the leftOperand as the parameter
function zero(operation = null) {
  return operation === null ? 0 : operation(0);
}

function one(operation = null) {
  return operation === null ? 1 : operation(1);
}

function two(operation = null) {
  return operation === null ? 2 : operation(2);
}

function three(operation = null) {
  return operation === null ? 3 : operation(3);
}

function four(operation = null) {
  return operation === null ? 4 : operation(4);
}

function five(operation = null) {
  return operation === null ? 5 : operation(5);
}

function six(operation = null) {
  return operation === null ? 6 : operation(6);
}

function seven(operation = null) {
  return operation === null ? 7 : operation(7);
}

function eight(operation = null) {
  return operation === null ? 8 : operation(8);
}

function nine(operation = null) {
  return operation === null ? 9 : operation(9);
}

// operations availables
// we return a function with the leftOperand parameter (thanks to closures), which returns the result of the operation
function plus(rightOperand) {
  return (leftOperand) => leftOperand + rightOperand;
}

function minus(rightOperand) {
  return (leftOperand) => leftOperand - rightOperand;
}

function times(rightOperand) {
  return (leftOperand) => leftOperand * rightOperand;
}

function dividedBy(rightOperand) {
  return (leftOperand) => Math.floor(leftOperand / rightOperand);
}

// Use cases
console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
