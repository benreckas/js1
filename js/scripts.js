// const forms = document.forms;

// forms.login.email.addEventListener('keydown', (e) => {
//   const val = e.target.value;
//   console.log(val);
// });

// const loginForm = forms.login;
//
// function enableSubmit() {
//   if (loginForm.password.value.length > 0
//   && loginForm.email.value.length > 0
//   && loginForm.username.value.length > 0) {
//     loginForm.submit.removeAttribute('disabled');
//   }
//   for(let i = 0; i > loginForm.length; i++) {
//     loginForm[i].addEventListener('input', (e) => {
//       enableSubmit();
//     });
//   }
// };

// var practice = function() {
//   var name = "Ben";
//   alert(this);
// }
//
// practice();

// let div = document.querySelector('#click');
//
// div.addEventListener('click', function(e) {
//   console.log(this);
// });

var checkScope = function() {
  console.log(this);
};

var obj = {
  test: checkScope
};

obj.test();
// checkScope();
