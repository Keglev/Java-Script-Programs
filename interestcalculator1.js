/* This is a small program to calculate interest rates based on how many days are late 
please see GitHub comments on this programm*/
import dataInput from "readline-sync";
console.log("Interest Rates App");
let name = dataInput.question("Write your name: ");
console.log(name);
/* The next variable define the interst rate value*/
let interest_value;
let debt_value = dataInput.question("\nWrite the debt value in US$: ");

/* The following conditions apply: 
It only calculate the debt value if the debt is bigger than 0 AND the due date are late */
if(debt_value > 0)
{
    let late_days = dataInput.question("write here how many days passed after the due date: ");
    if(late_days > 0)
    {
        if(late_days > 15) /* give the standard value of 10% if is more than 15 days late. If not, it apply the 5% of the interest rate*/
        {
            interest_value = 10;
        }
        else
        {
            interest_value = 5;
        }
        debt_value = Number(debt_value); /* makes sure the values are in the Number format */
        late_days = Number(late_days);
        /* calculate the total debt and the interest value */
        let total_interest = (debt_value / 100) * interest_value;
        let total_value = debt_value + total_interest;
        /* show the results in the console */
        console.log("Original Debt Value:" +debt_value);
        console.log("late days in the invoice:" +late_days);
        console.log("Interest rate: " +interest_value+"%");
        console.log("Total debt value plus the interest rate: US$ "+total_value);
    }
    else
    {
        console.log("You do not have late payment");
    }
}
else
{
    console.log("The debt value must be bigger than 0!")
}
