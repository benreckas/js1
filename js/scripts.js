const fizzList  = document.querySelector('#fizzlist');

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        // Comment
        if(i % 3 === 0 && i % 5 === 0) {
            addToList('FizzBuzz');
        } 
        // Comment
        else if (i % 3 === 0) {
            addToList('Fizz');
        } 
        // Comment
        else if (i % 5 === 0) {
            addToList('Buzz');
        }
        // Comment
        else {
            addToList(i);
        }
    };
};

function addToList(str) {
    const li = document.createElement('li').innerHTML('str');
    return fizzList.appendChild(li);
};

fizzBuzz(100);