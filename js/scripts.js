// logical operators

// let a = 1;
// let b = '1';
//
// function compare () {
//   if (a !== b) {
//     console.log('These values are true.');
//   } else {
//     console.log('Thses values are false.');
//   }
// };
//
// compare();



// let isOldEnough = true;
// let hasWork = true;
// let hasMoney = true;
//
// function compare() {
//   if (isOldEnough == true && (hasWork == false || hasMoney == true)) {
//     console.log('You are good.');
//   } else {
//     console.log('You might have a problem.');
//   }
// };
//
// compare();



// var string1 = "My name is Ben";
// var string2 = new String("My name is Ben");
//
// var isStrictEquals = string1 === string2;
//     console.log("strict equals");
// var isLooseEquals = string1 == string2;
//     console.log("loose equals");



// console.log(15 % 5);



// var stringToNum = "Geekwise";
// var x = parseInt(stringToNum);
// console.log(x);
//
//
// var quantity = prompt('How many?', 5);
// quantity = parseInt(quantity);

// NaN === NaN //false. Popular interview question to compare NaN to NaN.



// let num1 = prompt('Give me a number.', 1);
// let num2 = prompt('What is the answer to life?', 23);
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// let total = num1 += num2;
// console.log(total);



// if(total === 22) {
//   alert("It's 22!!!");
// } else if (total === 21){
//   alert("It's 21!!!");
// } else {
//   alert("Damn. It's !22.");
// }

// switch(num1) {
//   case 10:
//     alert("It's 10");
//     break;
//   case 20:
//     alert("It's 20");
//     break;
//   default:
//     alert("It's !10 && !20");
//     break;
// }


// var response = prompt("Give me a number.");
// response = parseInt(response);
//
// response = NaN ? alert("Oh no!") : alert("Thanks!");





// Ask user for age
let age = prompt("Enter your birthday.", "01/01/2000");
// Take user age and subtract it from today's date for time difference in milliseconds
// divide diff in milliseconds by amount of milliseconds in a year for difference in years.
age = Math.floor((Date.now() - new Date(age))/31557600000);
console.log(age, typeof(age));


if (age >= 18) {
  var isUnderEighty = confirm("Are you less than 80?");
  console.log(isUnderEighty);
} else {
  alert("Get outta here you young whipper-snapper.");
}

if (isUnderEighty === true) {
    var starWars = confirm("Do you like Star Wars?");
    console.log(starWars);
} else if (isUnderEighty === false) {
    confirm("Do you like prunes?");
}

if (starWars === true) {
  alert("May the force be with you.");
}
