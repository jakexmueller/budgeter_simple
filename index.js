'use strict'

function printSalary(salary){
    document.getElementById('demo').innerHTML =
    salary;
}

function runBudgeter(){
    var budget = [];
    var salary = prompt('Please enter your annual salary', '40000');
    var rent = prompt('Please enter your monthly rent', '650')
    budget.push(rent);
    var transportationBudget = prompt('Please enter your monthly transportation budget (vehicle payments, insurance, gas, etc.)', '250')
    budget.push(transportationBudget);
    var foodBudget = prompt('Please enter your monthly food budget', '300')
    budget.push(foodBudget);
    document.getElementById('salary').innerHTML=salary;
    for (let i=0; i<budget.length; i++){
        let budgetTotal = budget[i]+=0;
        document.getElementById('budget').innerHTML=budgetTotal;
        //budgetTotal.insert
    }
    
}

function printName(){
    console.log('Jacob');
}

function testTextTransfer(){
    var testText = prompt('Enter text to test', 'Hey Jacob');
    document.getElementById('demo').innerHTML=testText;
}