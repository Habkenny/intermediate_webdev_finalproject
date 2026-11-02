require("./style.css");

const {
  calculateSimpleInterest,
  calculateTotalPayableAmount,
} = require("./script.js");

const calculateButton = document.getElementById("calculate-btn");

calculateButton.addEventListener("click", () => {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  const interest = calculateSimpleInterest(principal, rate, time);
  const total = calculateTotalPayableAmount(principal, interest);

  document.getElementById("result").innerHTML = `
    <div>Principal Amount: <span>${principal.toFixed(2)}</span></div>
    <div>Total Interest: <span>${interest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${total.toFixed(2)}</span></div>
  `;
});