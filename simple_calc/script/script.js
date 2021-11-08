/**
 * script.js
 *
 * @file  Simple calculator script
 * @author Tomás Sánchez
 * @since  11.07.2021
 */

const operatorTable = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function onChangeOperator(operator) {
  document.getElementById("operator").textContent = operator;
}

function onCalculate() {
  var result = 0;

  let operation =
    operatorTable[document.getElementById("operator").textContent] ||
    ((a, b) => NaN);

  result = operation(
    parseFloat(document.getElementById("operand-0").value),
    parseFloat(document.getElementById("operand-1").value)
  );

  document.getElementById("result").value = result.toLocaleString();
}
