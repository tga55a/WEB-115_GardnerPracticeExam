
// Calculations

let MonthlyIncome = "NaN"
let MonthlyExpenses = "NaN"
let Months = "NaN"

let Savings = "NaN"
let ProjectedSavings = "NaN"


function ErrorChecker() {
    MonthlyIncome = Number(window.prompt("Enter your total monthly income")) 
    console.log(MonthlyIncome != MonthlyIncome )
    if (MonthlyIncome !== MonthlyIncome) {
        window.alert("Invalid income. Please try again.")
        ErrorChecker()
        return
    }
    MonthlyExpenses =  Number(window.prompt("Enter your estimated monthly expenses"))
    if (MonthlyExpenses !== MonthlyExpenses) {
        window.alert("Invalid expenses. Please try again.")
        ErrorChecker()
        return
    }

    Months = Number(window.prompt("Enter the number of months to project the budget for."))
    if (Months !== Months) {
        window.alert("Invalid months. Please try again.")
        ErrorChecker()
        return
    }

    Savings = (MonthlyIncome - MonthlyExpenses) 
    ProjectedSavings = Savings * Months
}
ErrorChecker()



// Get da elements
const IncomeElement = document.getElementById("Income")
const ExpensesElement = document.getElementById("Expenses")
const SavingsElement = document.getElementById("Savings")
const ProjectedSavingsElement = document.getElementById("ProjectedSavings")
const SavingsEachMonthElement = document.getElementById("SavingsEachMonth")

// Output
IncomeElement.innerHTML = "Monthly Income: $" + MonthlyIncome.toFixed(2)
ExpensesElement.innerHTML = "Monthly Expenses: $" + MonthlyExpenses.toFixed(2)
SavingsElement.innerHTML = "Monthly Savings: $" + Savings.toFixed(2)
ProjectedSavingsElement.innerHTML = "Total Projected Savings Over " + Months + " Months: $" + ProjectedSavings.toFixed(2) + "<br><br>Projected Savings Breakdown Per Month:"

for (let iterator = 1; iterator <= Months; iterator++) {
    let li = document.createElement("li")
    li.innerHTML = "Month " + iterator + ": $" + (Savings * iterator).toFixed(2)
    ProjectedSavingsElement.appendChild(li)
}

