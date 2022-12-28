let userNumber = [];
let userNumber2 = [];
let userStart = true;
const displayNumber=(num)=>{
    if(userStart){
        userNumber.push(num)
        document.getElementById("display1").innerHTML = userNumber.join('');

    }else if(!userStart)
    {
        userNumber2.push(num);
        document.getElementById("display2").innerHTML = userNumber2.join('');
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
const equals =()=>{
    switch(currentExpression) {
        case 'add':
            {var finalSum = sumExpression(Number((userNumber.join(''))), Number((userNumber2.join(''))))};
            document.getElementById('display3').innerHTML = finalSum;
            break;
        case 'subtract':
            {var finalSub = subExpression(Number((userNumber.join(''))), Number((userNumber2.join(''))))}
            document.getElementById('display3').innerHTML = finalSub;
            break;
    }
}