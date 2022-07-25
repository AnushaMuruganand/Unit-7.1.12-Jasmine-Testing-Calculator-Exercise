window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        update();
      });
    }
});
  
let amountUI, yearsUI, rateUI, monthlyPaymentUI;
  
  function getCurrentUIValues() {
    return {
      amount: +document.getElementById("loan-amount").value,
      years: +document.getElementById("loan-years").value,
      rate: +document.getElementById("loan-rate").value,
    };
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
function setupIntialValues() {

    const values = {
        amount: 1000,
        years: 4,
        rate: 4
    };
    amountUI = document.getElementById("loan-amount");
    amountUI.value = values.amount;
    yearsUI = document.getElementById("loan-years");
    yearsUI.value = values.years;
    rateUI = document.getElementById("loan-rate");
    rateUI.value = values.rate;
    update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
      let UIvalues = getCurrentUIValues();
      let monthly = calculateMonthlyPayment(UIvalues);
      updateMonthly(monthly);
    
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let { amount, years, rate } = values;
    const p = amount;
    const i = (rate / 12) / 100;
    const n = years * 12;
    
    // toFixed() returns a string representation of a number
    return ((p * i) / (1 - ((1 + i) ** (-n)))).toFixed(2);

  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
function updateMonthly(monthly) {
    monthlyPaymentUI = document.querySelector("#monthly-payment");
    monthlyPaymentUI.innerText = `$ ${monthly}`;

  }
  