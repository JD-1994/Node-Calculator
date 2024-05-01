//Node calulator
// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
const readline = require("readline-sync");

const objOperation = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const getOperation = (arrOperations) => {
  return readline.question(
    `Choose an operation (${arrOperations.join(", ")}): `,
    {
      limit: arrOperations,
      limitMessage: "This is not a valid operation!",
    }
  );
};

function getNumberInput(order) {
  return readline.questionInt(`Please enter the ${order} number: `, {
    limitMessage: "This is not a valid number",
  });

  
}



function calculate(operationsList, operation, num1, num2) {
    const arrOperations = Object.keys(objOperation);
  if (arrOperations.includes(operation)) {
    return operationsList[operation](num1, num2);
  } else {
    return NaN;
  }
}

function performOperation(operationsList) {
    const arrOperations = Object.keys(objOperation);
    const operation = getOperation(arrOperations);
    const firstNumber = getNumberInput("first");
    const secondNumber = getNumberInput("second");
  
    const result = calculate(operationsList, operation, firstNumber, secondNumber);
    console.log(`The result is: ${result}`);
  }
performOperation(objOperation);
