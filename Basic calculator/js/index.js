var input = "";
var inputArr = [];
var operator = "";

var calc = (clickedButton) => {
  if (clickedButton === "c") {
    input = "";
    inputArr = [];
    setInputValue(input);
  } else if (clickedButton === "d") {
    input = input.slice(0, input.length - 1);
    setInputValue(input);
  } else {
    if (
      (clickedButton.charCodeAt() >= 48 && clickedButton.charCodeAt() <= 57) ||
      clickedButton === "."
    ) {
      input = input + clickedButton;
      setInputValue(input);
    } else {
      if (input != "") {
        if (!input.includes(".")) input = intConversion(input);
        else input = floatConversion(input);
        inputArr.push(input);
        input = "";
        if (
          clickedButton === "+" ||
          clickedButton === "-" ||
          clickedButton === "*" ||
          clickedButton === "/" ||
          clickedButton === "%"
        ) {
          operator = clickedButton;
        } else {
          if (clickedButton == "=") {
            if (operator === "+") {
              var added_input = add(inputArr[0], inputArr[1]);
              setInputValue(added_input);
              clearValues();
            } else if (operator == "-") {
              var subracted_input = subtract(inputArr[0], inputArr[1]);
              setInputValue(subracted_input);
              clearValues();
            } else if (operator == "*") {
              var multiplied_input = multiply(inputArr[0], inputArr[1]);
              setInputValue(multiplied_input);
              clearValues();
            } else if (operator == "/") {
              var quotient = divide(inputArr[0], inputArr[1]);
              setInputValue(quotient);
              clearValues();
            } else if (operator == "%") {
              var remainder = modulo(inputArr[0], inputArr[1]);
              setInputValue(remainder);
              clearValues();
            }
          }
        }
      }
    }
  }
};

let setInputValue = (input) => {
  let result = getResult();
  result.value = input;
};

let clearValues = () => {
  operator = "";
  inputArr.length = 0;
  input = "";
  console.log(inputArr, operator);
};
let setFocus = () => {
  var result = getResult();
  result.focus();
};
var getResult = () => {
  var result = document.getElementById("result");
  return result;
};

var add = (input1, input2) => {
  return input1 + input2;
};

var subtract = (input1, input2) => {
  return input1 - input2;
};

var multiply = (input1, input2) => {
  return input1 * input2;
};

var divide = (input1, input2) => {
  return input1 / input2;
};

var modulo = (input1, input2) => {
  return input1 % input2;
};

var intConversion = (input) => {
  return parseInt(input);
};

var floatConversion = (input) => {
  return parseFloat(input);
};
