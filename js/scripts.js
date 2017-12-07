// var sayHello = function() {
//   alert('Hey there!');
// };

// setTimeout(function() {
//   sayHello();
// }, 2000);

// var interval =

const forms = document.forms;

var loginBtn = document.querySelector('button');
var clear = document.querySelector('#clear');
var change = document.querySelector('#change');
var alert = document.querySelector('#alert');

loginBtn.addEventListener('click', function (e){
  var un = document.forms[0].username.value;
  sessionStorage.setItem('username', un);
});

var clear = document.querySelectorAll('#clear');
var change = document.querySelectorAll('#change');
var alert = document.querySelectorAll('#alert');

var attatchListeners = function(element, evt) {
  element.addEventListener(evt, function(e) {
    switch(element) {
      case update:
        var itemToStore = provideStorageItem(document.forms[0].username.value);
        localStorage.setItem('username', itemToStore)
      break;
    }
  });
}






clear.addEventListener('click', function (e){
  sessionStorage.clear();
});

change.addEventListener('click', function (e){
  var newun = prompt(un);
  sessionStorage.removeItem('username');
  sessionStorage.setItem('username', newun);
});

alert.addEventListener('click', function (e){
  alert(sessionStorage.getItem('username'));
});
