"use strict"

function printSalary(salary){
    document.getElementById("demo").innerHTML =
    salary;
}

function getIncome(){
    var salary = prompt("Please enter your annual salary", "40000");
    document.write('$' + salary);
}

function printName(){
    console.log('Jacob');
}