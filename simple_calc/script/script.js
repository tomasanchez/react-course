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
  let textOperator = document.getElementById("operator").textContent,
    operation =
      operatorTable[textOperator] ||
      ((a, b) => {
        alert(`Unsupported operator ${textOperator}`);
        return NaN;
      }),
    result = operation(
      parseFloat(document.getElementById("operand-0").value),
      parseFloat(document.getElementById("operand-1").value)
    );

  document.getElementById("result").value = result.toLocaleString();
}
