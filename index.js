'use strict'

function printSalary(salary){
    document.getElementById('demo').innerHTML =
    salary;
}

function runBudgeter(){
    var salary = prompt('Please enter your annual salary', '40000');
    var rent = prompt('Please enter your monthly rent', '650')
    var transportationBudget = prompt('Please enter your monthly transportation budget (vehicle payments, insurance, gas, etc.)', '250')
    var foodBudget = prompt('Please enter your monthly food budget', '300')
    document.write('Salary: $' + salary);
    document.write('Rent: $' + rent);
    document.write('Transportation: $' + transportationBudget);
    document.write('Food Budget: $' + foodBudget);
}

function printName(){
    console.log('Jacob');
}