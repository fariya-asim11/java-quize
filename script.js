
alert("Javascript Quize From S.M.I.T\n Please select the option a, b, c and d \nher you gooo \n start");
var mcqsMarks = 0;




var question1 = prompt("1. What is the output of console.log(typeof NaN)?\n a.  Number \nb. String \nc.  Object\nd.Undefined")
if (question1 === 'a') {
    msqsscore++;
}



var question2 = prompt("2. Which of the following is NOT a JavaScript data type? \na)Number \nb)  String \nc)  Boolean \nd)Null")
if (question2 === 'd') {
    msqsscore++;
}



var qquestion3 = prompt("3.What is the purpose of the var keyword in JavaScript? \na)  To declare a constant variable\nb) To declare a global variable \nc)  To declare a local variable \nd) To declare a function")
if (question3 === 'c') {

    msqsscore++
}


var question4 = prompt("4. What is the purpose of the if-else statement in JavaScript? \na) To declare a variable \nb) To iterate over an array \nc) To make decisions based on conditions \nd) To display an alert message")
if (question4 === 'c') {
    msqsscore++;
}



var question5 = prompt("5.What is the purpose of the this keyword in JavaScript? \na)To refer to the global object \nb)  To refer to the current function \nc) To refer to the current object \nd)  To refer to the current scope")
if (question5 === 'c') {
    msqsscore++;
}



var question6 = prompt("6. Which of the following is a JavaScript framework? \na)  React \nb) Angular \nc) Vue.js \nd) All of the above")
if (question6 === 'd') {

    msqsscore++
}



var question7 = prompt("7. What is the purpose of the async/await syntax in JavaScript? \na) To handle synchronous code \nb) To handle asynchronous code \nc) To handle errors \nd) To handle promises")
if (question7 === 'b') {

    msqsscore++
}

var question8 = prompt("8. What is the purpose of the try/catch block in JavaScript? \na)  To handle errors \nb) To handle exceptions \nc) ) To handle promises \nd)To handle asynchronous code")
if (question8 === 'a') {
    msqsscore++;
}



var question9 = prompt("9. Which of the following is a JavaScript design pattern? \na) ) Factory \nb) \nb) Singleton \nc) Observer \nd)All of the above")
if (question9 === 'd') {
    msqsscore++;
}



var question10 = prompt("10. What is the purpose of the Proxy object in JavaScript?\na)To create a virtual representation of an object \nb)  To create a new object \nc)To create a copy of an object \nd)To create a reference to an object")
if (question10 === 'a') {

   msqsscore++
}

alert("Check your Result in Console");
console.log("Your Marks is " + mcqsMarks);
if (mcqsMarks === 10 || mcqsMarks === 9 || mcqsMarks === 8) {
    console.log("** excellent**  Best Perfomance! keep it up");
}
else if (mcqsMarks === 7 || mcqsMarks === 6 || mcqsMarks === 5) {
    console.log("** good**   Average Perfomance! keep it up");
}
else {
    console.log("** everage **  !Need Hard Work!keep it up");
}