let userNumber = '';
let userNumber2 = '';
let userStart = true;
let currentExpression = '';
const calculator = document.querySelector('#calculator');
const displayNumber=(num)=>{
    if(userStart){
        userNumber += num
        document.getElementById('display3').innerHTML = 0;
        document.getElementById("display1").innerHTML = userNumber;
        return userNumber

    }else if(!userStart)
    {
        userNumber2 += num;
        document.getElementById('display3').innerHTML = 0;
        document.getElementById("display2").innerHTML = userNumber2;
        return userNumber2
    }
}
const chosenExperssion =(exp)=>{
    currentExpression = exp;
    changeCalColor(currentExpression)
    userStart = false;
}
const sumExpression = (num1, num2) => {
    return num1 + num2
}
const subExpression=(num1, num2)=>{
    return num1 - num2;
}
const mulExpression =(num1, num2)=>{
    return num1 * num2;
}
const divExpression =(num1, num2)=>{
    return num1 / num2;
}
const equals =()=>{
    switch(currentExpression) {
        case 'add':
            var finalSum = sumExpression(Number(userNumber), Number(userNumber2));
            document.getElementById('display3').innerHTML = finalSum;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            currentExpression = '';
            changeCalColor(currentExpression);
            break;
        case 'subtract':
            {var finalSub = subExpression(Number(userNumber), Number(userNumber2))}
            document.getElementById('display3').innerHTML = finalSub;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            currentExpression = '';
            changeCalColor(currentExpression);
            break;
        case 'multiply':
            {var finalMul = mulExpression(Number(userNumber), Number(userNumber2))};
            document.getElementById('display3').innerHTML = finalMul;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            currentExpression = '';
            changeCalColor(currentExpression);
            break;
        case 'divide':
            {var finaldiv = divExpression(Number(userNumber), Number(userNumber2))};
            document.getElementById('display3').innerHTML = finaldiv;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            currentExpression = '';
            changeCalColor(currentExpression);
            break;
    }
}
const changeCalColor = (exp) => {
    switch(exp) {
        case 'add': 
            calculator.style.backgroundColor = '#E55451';
            break;
        case 'subtract':
            calculator.style.backgroundColor = '#67aded';
            break;
        case 'multiply':
            calculator.style.backgroundColor = '#f1ba67';
            break;
        case 'divide':
            calculator.style.backgroundColor = '#af6ffe';
            break;
        default:
            calculator.style.backgroundColor = 'white';
            break;
    }
}
