// var num1 = document.getElementById('num1')
// We can Also Use "query selector in place of get element by id"
var num1 = document.querySelector('#num1')
var num2 = document.getElementById('num2')
var operator = document.getElementById('operator')
var result = document.getElementById('result')
var button = document.getElementById('btn')

button.addEventListener("click",function(){

    if (num1.value === "") {
        alert("Enter the number 1")
    }
    if (num2.value === "") {
        alert("Enter the number 2")
    }
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    
    // if (operator.value === '+') {
    //     result.value = n1 + n2;
    // }
    // else if (operator.value === '-') {
    //     result.value = n1 - n2;
    // }
    // else if (operator.value === '*') {
    //     result.value = n1 * n2;
    // }
    // else if (operator.value === '/') {
    //     result.value = n1 / n2;
    // }

    // let's see "eval"
    // it takes string as an input

    // result.value = eval(num1.value + operator.value + num2.value)
    // document.getElementById('answer').innerHTML=result.value

    var op = operator.value
    switch (op) {
        case '+':
            result.value = n1 + n2
            break;
        case '-':
            result.value = n1 - n2
            break;
        case '*':
            result.value = n1 * n2
            break;
        case '/':
            result.value = n1 / n2
            break;

    }
})
// function Calculate() {
//     if (num1.value === "") {
//         alert("Enter the number 1")
//     }
//     if (num2.value === "") {
//         alert("Enter the number 2")
//     }
//     var n1 = Number(num1.value)
//     var n2 = Number(num2.value)
    
//     if (operator.value === '+') {
//         result.value = n1 + n2;
//     }
//     else if (operator.value === '-') {
//         result.value = n1 - n2;
//     }
//     else if (operator.value === '*') {
//         result.value = n1 * n2;
//     }
//     else if (operator.value === '/') {
//         result.value = n1 / n2;
//     }
// }