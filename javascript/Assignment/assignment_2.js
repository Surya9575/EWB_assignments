
let billAmount = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

// Calculate the tip
let calculatedTip = billAmount * tipPercentage / 100;

// Calculate the total using an assignment operator
let totalAmount = billAmount;
totalAmount += calculatedTip;

// Display the results
console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
