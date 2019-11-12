
function funcSum(n1,n2){
    return +n1 + +n2;
}

function funcMinus(n1,n2){
    return n1 - n2;
}

function funcDivision(n1,n2){
    return n1 / n2;
}
function funcMultiplication(n1,n2){
    return n1 * n2;
}
function circleLength(r){
    return 2 * 3.14 * r;
}

console.log(funcSum("5","6"));
console.log(funcMinus(7,6));
console.log(funcDivision(123545,4));
console.log(funcMultiplication(5,4));
console.log(circleLength(5));

function getTime()
{
    date = new Date;
    if(date.getMinutes() > 0){
        result = (24 - date.getHours()-1) + ":" + (60 - date.getMinutes());
    }
    else {
        result = (24 - date.getHours()) + ":" + (date.getMinutes());
    }
    return "Время до конца суток : " + "<h1>"+ result + "</h1>" ;
}
 document.write("<p>"+ getTime() + "</p>");

/*
■ Задания, в которых необходимо использовать IF.
*/
==================================================================
//1. Запросить у пользователя число и определить, оно поло-
//жительное, отрицательное или ноль.
let userInputValue = prompt(" Введите любое число ");
let userInputNumber =  Number(userInputValue);
if(Boolean(userInputNumber)){
 if(userInputNumber < 0)
  {
    alert("Вы ввели отрицательное число " + userInputNumber);
  }
  else if(userInputNumber > 0)
  {
    alert("Вы ввели положительное число " + userInputNumber);
  }
  else alert("Вы ввели число равное нулю " + userInputNumber);
}
 else alert("Вы ввели некорректное число " + userInputValue);
//==================================================================
//2. Запросить у пользователя его возраст и проверить кор-
//ректность введенных данных (0–120 лет).
userInputValue = prompt("Введите ваш возраст ");
userInputNumber =  Number(userInputValue);
date = new Date;
if(Boolean(userInputNumber)){
 if(userInputNumber > 0 && userInputNumber < 120)
  {
    alert("Ваш возраст = " + userInputNumber + "  Вы родились в  " + (date.getFullYear() - userInputNumber) + " году");
  }
  else if(userInputNumber <= 0)
  {
    alert("Похоже, что вы еще не родились ;-) ");
  }
  else alert("Похоже, что вы долгожитель ;-) ");
 }
 else  alert("Вы ввели некорректное число  " + userInputValue);
//==================================================================
//3. Запросить у пользователя число и вывести его модуль
//(|7| = 7, |-7| = 7).
userInputValue = prompt("(Число по модулю)  Введите число ");
userInputNumber =  Number(userInputValue);
if(Boolean(userInputNumber))
  {
    alert("Ваше число по модулю = " + Math.abs(userInputNumber));
  }
  else  alert("Вы ввели некорректное число  " + userInputValue);
//==================================================================
//4. Запросить у пользователя время (часы, минуты, секунды)
//и проверить корректность введенных данных.
const arr = ["часы ", "минуты ", "секунды "];
let time = [];
for(let i = 0; i < 3; i++)
{
    let bool = false;
    userInputNumber =  Number(prompt("Введите  " + arr[i]));
    while (Boolean(userInputNumber)==false && userInputNumber !== 0){
    alert("Вы ввели не числовое значение " + arr[i]);
    userInputNumber =  Number(prompt("Введите корректно " + arr[i]));
    }
    while (userInputNumber < 0){
    alert("Вы ввели значение меньше нуля" + arr[i]);
    userInputNumber =  Number(prompt("Введите корректно " + arr[i]));
    }

     while (!bool){
     console.log(userInputNumber + "  " + i);
            if(i==0 && userInputNumber < 24)
            {
                time[i] = userInputNumber;
                console.log(time[i]);
                bool = true;
            }
            else if(i>0 && userInputNumber < 60)
            {
                time[i] = userInputNumber;
                console.log(time[i]);
                bool = true;
            }
            else {
            bool = false;
            alert("Вы ввели некорректно " + arr[i]);
            userInputNumber =  Number(prompt("Введите корректно " + arr[i]));
            }
      }
}
  console.log("Введенное время : " + time[0] + " : " + time[1] + " : " + time[2]);
//==================================================================
//==================================================================
//■ Задания, в которых необходимо использовать SWITCH.
//==================================================================

//1. Запросить у пользователя номер месяца и вывести на экран
//его название.
   userInputNumber =  Number(prompt("Введите номер месяца ");
   if(Boolean(userInputNumber))
   {
        switch(userInputNumber)
        {
            case 1: alert("Январь");
                break;
            case 2: alert("Февраль");
                break;
            case 3: alert("Март");
                break;
            case 4: alert("Апрель");
                break;
            case 5: alert("Май");
                break;
            case 6: alert("Июнь");
                break;
            case 7: alert("Июль");
                break;
            case 8: alert("Август");
                break;
            case 9: alert("Сентябрь");
                break;
            case 10: alert("Октябрь");
                break;
            case 11: alert("Ноябрь");
                break;
            case 12: alert("Декабрь");
                break;
            default: alert("Такого месяца не существует");
                break;
        }
   }
//==================================================================
//2. Реализовать калькулятор. Пользователь вводит 2 числа и
//знак (+ - * /). В зависимости от введенного знака решить
//пример и вывести результат.
let x = parseFloat(prompt("Введите число x"));
let y = parseFloat(prompt("Введите число y"));
let str = prompt("Введите одно из действий + - * /");
switch(str){
    case "+": console.log("Результат  = " + (+x + +y));
        break;
    case "-": console.log("Результат  = " + (x - y));
        break;
    case "*": console.log("Результат  = " + (x * y));
        break;
    case "/": console.log("Результат  = " + (x / y));
        break;
    default:
            console.log("Вы не выбрали или неправильно выбрали знак действия ");
        break;
}
//==================================================================