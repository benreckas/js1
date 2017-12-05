// var name = 'Ben';
//
// console.log(Object.getPrototypeOf(name));
//
// var myObj = {
//         firstName: "Ben",
//         lastName: "Reckas"
// };

// var number = 7;
//
// console.log(Object.getPrototypeOf(number));
//
// var arr = ['val1', 'val2', 'val3'];
//
// console.log(Object.getPrototypeOf(arr));
//
// var bool = true;
//
// console.log(Object.getPrototypeOf(bool));



function Movie(title, releaseYear, IMDBRating, director) {
  this.title = title,
  this.releaseYear = releaseYear,
  this.IMDBRating = IMDBRating,
  this.director = director
};

Movie.prototype.sayThings = function () {
  return `The movie ${this.title} was released in ${this.releaseYear}.`;
}

var babyDriver = new Movie("Baby Driver", 2017, 7.8, "Edgar Wright");

function Arthouse(title, releaseYear, IMDBRating, director, snoodyLevel, redditRating) {
  Movie.call(this, title, releaseYear, IMDBRating, director);
  this.snoodyLevel = snoodyLevel;
  this.redditRating = redditRating;
}

console.log(babyDriver);


// function User(firstName, lastName, password) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.password = password
// };
//
// const userEntry = function() {
//   const first = prompt("Give me a name.", "Ben");
//   const last = prompt("Give me your last name.", "Reckas");
//   const pass = prompt("Password", "Password");
//   const person = new User(first, last, pass);
//   console.log(person);
// }
//
// userEntry();
