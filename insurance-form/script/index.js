/**
 * index.js
 *
 * @file  Contact scripting
 * @author Tomás Sánchez
 * @since  10.29.2021
 */

/**
 * Plan pricing Hash Table
 * @private
 */
const planPricing = ["500.00", "1,000.00", "1,500.00"];

/**
 * Event handler fired when plan select is changed, sets the corresponding pricing.
 */
function onPlanChange() {
  var planID = document.getElementById("floatingSelect").value;
  document.getElementById(
    "plan-pricing"
  ).textContent = `$ ${planPricing[planID]}`;
}
