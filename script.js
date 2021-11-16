'use strict';

const usersInput = document.querySelector('#usersInput');
const taskList = document.querySelector('#taskList');
const addTaskButton = document.querySelector('#addTaskButton');
const renameButton = document.querySelector('#renameButton1');

addTaskButton.addEventListener('click', function () {
  const html = `
  <input type="checkbox">
  <label>${usersInput.value}</label>
  <input type="button" class='rename-button'value="Rename"><br>`;

  taskList.insertAdjacentHTML('afterbegin', html);

  usersInput.value = '';
});

renameButton.addEventListener('click', function () {
  const task = document.getElementById('task1').textContent;
  console.log(task);
  taskList.removeChild(document.getElementById('task1'));
});
