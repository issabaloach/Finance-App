
var input = document.getElementById("input")
var income_html = document.getElementById("income")
var expense_html = document.getElementById("expense")
var balance_html = document.getElementById("balance")
var savings_loss_html = document.getElementById("savings")
var summary_html = document.getElementById("summary")
var summary_body = document.getElementById("summary-body")

var income = 0;
var expense = 0;

function income_btn() {
    var input_value = parseFloat(input.value);
    if (!isNaN(input_value)) {
        income += input_value;
        income_html.innerHTML = income;
        input.value = ""; // clear the input field
        calculate_balance();
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

function expenditure_btn() {
    var input_value = parseFloat(input.value);
    if (!isNaN(input_value)) {
        expense += input_value;
        expense_html.innerHTML =  expense;
        input.value = ""; // clear the input field
        calculate_balance();
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

function calculate_balance() {
    var balance = income - expense;
    balance_html.innerHTML = balance;
    if (balance > 0) {
        savings_loss_html.innerHTML = balance;
        savings_loss_html.style.color = "green";
    } else {
        savings_loss_html.innerHTML = Math.abs(balance);
        savings_loss_html.style.color = "red";
    }
}
