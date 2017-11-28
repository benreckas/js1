// Print out all numbers from 1-100
// For all multipliers of 3, print "Fizz" instead of the number

const body = document.querySelector('body');

for(let i = 1; i <= 100; i++){
  const p = document.createElement('p');
  if ((i % 3 === 0) && (i % 5 === 0)) {
    p.textContent = "FizzBuzz";
  } else if (i % 3 === 0) {
    p.textContent = "Fizz";
  } else if (i % 5 === 0) {
    p.textContent = "Buzz";
  } else {
    p.textContent = [i];
  }
  body.appendChild(p);
};
