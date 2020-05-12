"use strict";

// TODO darba aprasancio objekto savybes:
// -description
// -created_on
// -deadline
// -status: todo, in-progress, done  
//console.log(todo_list);

// render TODO list items
function renderList(list) {
  const listPlace = document.querySelector('.container');
  let HTML = '';

  for (let i = 0; i < list.length; i++) {
    const todoItem = list[i];
    HTML += `
        <div class="item">
            <div class="status ${todoItem.status}"></div>
            <p class="description">${todoItem.description}</p>
            <div class="deadline">${todoItem.deadline}</div>
            <div class="actions">
                <div class="action remove">Remove</div>
            </div>
        </div>`;
  }

  return listPlace.innerHTML += HTML;
}

//GENERATE CONTENT
renderList(todo_list);

//REMOVE SINGLE TODO ITEM
const removeActions = document.querySelectorAll('.item .action.remove');

for (let i = 0; i < removeActions.length; i++) {
  const removeElement = removeActions[i];
  removeElement.addEventListener('click', actionRemoveTodoItem);
}

function actionRemoveTodoItem(event) {
  const parentItem = event.target.closest('.item');
  parentItem.remove();
  // ARBA TRUMPIAU:
  // event.target.closest('.item').remove();
}


//REMOVE ALL TODO ITEMS
const BTNremoveAll = document.querySelector('.global-actions > .action.remove');

BTNremoveAll.addEventListener('click', actionRemoveAllTodoItems);

function actionRemoveAllTodoItems(event) {
  const allTodoItems = event.target
    .closest('.container')
    .querySelectorAll('.item');

  for (let i = 0; i < allTodoItems.length; i++) {
    allTodoItems[i].remove();
  }
}

// FORM ACTIONS
const DOMform = document.querySelector('.form');
const DOMtaskTextarea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadlineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformActions = DOMform.querySelector('.actions');
const DOMformAdd = DOMformActions.querySelector('.btn.add');
const DOMformClear = DOMformActions.querySelector('.btn.clear');

DOMformClear.addEventListener('click', clearForm);

function clearForm() {
  DOMtaskTextarea.value = '';
  DOMdeadlineInput.value = '';
}
DOMformAdd.addEventListener('click', addNewTodoItem);

function addNewTodoItem() {
  const now = new Date();
  let mintutes = now.getMinutes();
  let hours = now.getHours();
  const days = now.getDate();
  const month = now.getMonth() +1;
  const year = now.getFullYear;

  if ( minutes < 10 ) {
    minutes = '0'+ minutes;
  }
  if (hours < 10) {
    hours = '0'+ hours;
  }
  if (days < 10 ){
    days = '0'+ days;
  }
  if (month< 10) {
    month = '0'+ month;
  }
   
  const timeNow = year+ '-' +month+ ' ' +hours+ ':' +mintutes;


  let newTodo = {
    description: DOMtaskTextarea.value.trim(),
    created_on: formatedDate(),
    deadline: DOMdeadlineInput.value.trime(),
    status: 'todo'
  };

  console.log('TODO: validuojame description');
  console.log('TODO: validuojame deadline');

  console.log('TODO: created_on NOW/DABAR');

  console.log(newTodo);
  return;
}