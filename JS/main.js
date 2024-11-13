// 1- Write a program that allow to user enter number then print it
// var num=Number(window.prompt("please Enter a Num!"));
// console.log("your num is",num)
// document.getElementById("result").innerHTML=num;

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// var num=Number(window.prompt("Enter the num,please"));
// if(num%3==0&&num%4==0)
// {
//     console.log("Yes");
// }
// else
// {
//     console.log("NO")
// }

// 3- Write a program that allows the user to insert 2 integers then print the max
// var num1=Number(window.prompt("Enter first number"));
// var num2=Number(window.prompt("Enter second number"));
// if(num1>num2)
// {
//     console.log("max= ",num1)
// }
// else
// {
//     console.log("max= ",num2)
// }

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// var num=Number(window.prompt("Enter a number"));
// if(num<0)
// {
//     console.log(num, "is negative")
// }
// else if(num>0)
// {
//     console.log(num,"is positive")
// }
// else
// {
//     console.log("it is zero")
// }

// 5- Write a program that take 3 integers from user then print the max element and the min element.
// var num1 = Number(window.prompt("Enter first number"));
// var num2 = Number(window.prompt("Enter second number"));
// var num3 = Number(window.prompt("Enter third number"));
// if (num1 > num2 && num1 > num3) {
//   console.log("max= ", num1);
// } else if (num2 > num3) {
//   console.log("max= ", num2);
// } else {
//   console.log("max= ", num3);
// }
// if (num1 < num2 && num1 < num3) {
//   console.log("min= ", num1);
// } else if (num2 < num3) {
//   console.log("min= ", num2);
// } else {
//   console.log("min= ", num3);
// }

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// var num=Number(window.prompt("Enter a number"));
// if(num%2==0)
// {
//     console.log(num," is even");
// }
// else
// {
//     console.log(num, " is odd");
// }

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var character1 = window.prompt("Enter a character please");
// if (
//   character1 == "a" ||
//   character1 == "e" ||
//   character1 == "i" ||
//   character1 == "o" ||
//   character1 == "u" ||
//   character1 == "A" ||
//   character1 == "E" ||
//   character1 == "I" ||
//   character1 == "O" ||
//   character1 == "U"
// ) {
//   console.log(character1, " is a Vowel character");
// } else {
//   console.log(character1, " is a consonant character");
// }

// 15- Write a program to print total number of days in month
// var month = window.prompt(
//   "Enter the month name (jan-feb-mar-apr-may-jun-jul-aug-sep-oct-nov-dec)"
// );

// switch (true) {
//   case month == "jan" ||
//     month == "mar" ||
//     month == "may" ||
//     month == "jul" ||
//     month == "aug" ||
//     month == "oct" ||
//     month == "dec":
//     console.log(month, " 31 days");
//     break;
//   case month == "feb":
//     console.log(month, " 28 days");
//     break;
//   default:
//     console.log(month, " 30 days");
//     break;
// }

// 17- Write a program to find maximum between two numbers
// var num1 = Number(window.prompt("Enter first number"));
// var num2 = Number(window.prompt("Enter second number"));
// switch (true) {
//   case num1 > num2:
//     console.log("max= ", num1);
//     break;
//   default:
//     console.log("max= ", num2);
//     break;
// }

// 18- Write a program to check whether a number is even or odd
// var num=Number(window.prompt("Enter a number"));
// switch (true)
// {
//     case (num%2==0):
//         console.log(num, " is Even")
//         break;
//     default:
//         console.log(num," is odd")
//         break;
// }

// 19- Write a program to check whether a number is positive or negative or zero
// var num = Number(window.prompt("Enter a number"));
// switch (true) {
//   case num > 0:
//     console.log(num, " is Positive");
//     break;
//   case num < 0:
//     console.log(num, " is Negative");
//     break;
//   case num == 0:
//     console.log("it is zero ");
//     break;
// }

// 20- Write a program to create Simple Calculator
var num1 = Number(window.prompt("Enter first number"));
var operator = window.prompt("Enter the operator sign (+ , - , * , / )");
var num2 = Number(window.prompt("Enter third number"));
switch (true) {
  case operator == "+":
    console.log(num1, operator, num2, "=", num1 + num2);
    break;
  case operator == "-":
    console.log(num1, operator, num2, "=", num1 - num2);
    break;
  case operator == "*":
    console.log(num1, operator, num2, "=", num1 * num2);
    break;
  case operator == "/":
    console.log(num1, operator, num2, "=", num1 / num2);
    break;
}
