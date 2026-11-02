const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount;
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    calculateSimpleInterest,
    calculateTotalPayableAmount,
  };
}