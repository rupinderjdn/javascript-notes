var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var operator = document.getElementById('operator')
var result = document.getElementById('result')

button.addEventListener("click",function(){
    if (num1.value === "") {
        alert("Enter the number 1")
    }
    if (num2.value === "") {
        alert("Enter the number 2")
    }
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    
    if (operator.value === '+') {
        result.value = n1 + n2;
    }
    else if (operator.value === '-') {
        result.value = n1 - n2;
    }
    else if (operator.value === '*') {
        result.value = n1 * n2;
    }
    else if (operator.value === '/') {
        result.value = n1 / n2;
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