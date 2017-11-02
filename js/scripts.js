// javascript is a loosly typed language - we dont have to define the data types.
// there are 6 data types in jacascript: string, number, boolean, undefined, null, and symbol

var message = "string";
  console.log(typeof message);

var number = 23;
  console.log(typeof number);

var bool = false;
  console.log(typeof bool);

/*
  We're writing the primitive version of these data types and javascript is mostly converting
  them to objects
*/

// This is a code block in its most simple form
{

}



// var - globally declared, any legal expression, wherever they are in the code they are hoisted
// all undeclared variables are var - always use declared variables

// let - works the same as a var, but with different rules
// declares variables that are limited to the block they're in- not hoised globally

// const - cannot be redefined, they can be redeclared and then redefined, follow
// same scoping rules as let.



// var herNumber = 8675309, herName = "Jenny";
// console.log(herNumber, herName);



// const name = "Ben";
// console.log(name);
// if(true) {
//   const name = "Reckas";
//   console.log(name);
// };
// console.log(name);

// console.log(computer);



// var best = "GoT";
// let best = "Stranger Things";
// const best = 42;
//
// console.log(best);



// var rightNow = new Date();
// console.log(rightNow);



// var name = "dlkfjadadflkj"
// var stringObj = new String("John");
//
// console.log(typeof name, typeof stringObj);
//
// console.log(stringObj.split('o').join('ough'));



// let bestNumber = 28;
// console.log(typeof bestNumber);
//
// let reallyBestNumber = new Number(42);
// console.log(typeof reallyBestNumber);
//
//
//
// // 0 = false 1 = true for booleans
//
// let object = {
//   name: "Ben",
//   age: 28
// };
//
// console.log(object);



var confirm = prompt("What's your name?")
console.log(confirm);
