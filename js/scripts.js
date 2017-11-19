const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');

function addItem(input) {
  let listItem = document.createElement('li');
  listItem.innerHTML = input;
  // listItem.appendChild(innerText);
  todoList.appendChild(listItem);
};

addItem(input);

// console.log(addItem);
