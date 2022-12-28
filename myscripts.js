let userNumber = '';
let userNumber2 = '';
let userStart = true;
const displayNumber=(num)=>{
    if(userStart){
        userNumber += num
        document.getElementById("display1").innerHTML = userNumber;
        return userNumber

    }else if(!userStart)
    {
        userNumber2 += num;
        document.getElementById("display2").innerHTML = userNumber2;
        return userNumber2
    }
}
let currentExpression = '';
const chosenExperssion =(exp)=>{
    currentExpression = exp;
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
            break;
        case 'subtract':
            {var finalSub = subExpression(Number(userNumber), Number(userNumber2))}
            document.getElementById('display3').innerHTML = finalSub;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            break;
        case 'multiply':
            {var finalMul = mulExpression(Number(userNumber), Number(userNumber2))};
            document.getElementById('display3').innerHTML = finalMul;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            break;
        case 'divide':
            {var finaldiv = divExpression(Number(userNumber), Number(userNumber2))};
            document.getElementById('display3').innerHTML = finaldiv;
            document.getElementById("display1").innerHTML = 0;
            document.getElementById("display2").innerHTML = 0;
            userNumber = '';
            userNumber2 = '';
            userStart = true;
            break;
    }
}
