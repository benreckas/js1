// function(name) {
//   console.log(name);
// }("Ben");

// Used named functions as often as possible

// function DECLARATION
// function logName(name) {
//   console.log(name);
// };

// function EXPRESSION
// var logName = function(name) {
//   console.log(name);
// }
//
// var nameToLog = prompt("Gimme a name.");
// logName(nameToLog);
//
// function doWork(task, time) {
//   var rate = 50;
//   function calcTime(time) {
//     return time * 50;
//   }
//   var totalTime = calcTime(time);
//   function {
//
//   }
// }

// var userInput = prompt("Give me some kind of sentence.");
//
// function capitalize(string) {
//   string.toLowerCase();
//   string.charAt(0).toUpperCase() + string.slice(1);
//   return;
// }; This doesnt work yet.

// capitalize(userInput);

var userInput = prompt("Give me some kind of sentence.");

function capitalize(string) {
    var sentences = string.split('.');
    if(sentences.length > 1) {
      let newSentence;
      let i = 0;
      for(i; i <= example.length; i++) {
        var firstLetter = example[i].substr(0, 1).toUpperCase();
        var rest = example[i].substr(1).toLowerCase();
        newSentence += `${firstLetter}${rest}`;
      }
      return newSentence;
    }
  }
};

alert(capitalize(sentence));


myNewFunc(arg1, arg2) {
  return arg1 * arg2;
}
