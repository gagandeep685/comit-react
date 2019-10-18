alert("Enter two numbers to see if the first is greater than the second")
const firstNumber =prompt("what is first number?");
const secondNumber =prompt("what is second number?");
const accurate =confirm(firstNumber>secondNumber);
console.log("were we accurate?", accurate);