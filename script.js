"use strict";
let tasks = [];

const usersInput = document.querySelector(".usersInput");
const tasksList = document.querySelector(".tasksList");
const addTaskButton = document.querySelector(".addTaskButton");

addTaskButton.addEventListener("click", function () {
  tasks.push(usersInput.value);

  const taskNumber = tasks.length;
  const newTask = usersInput.value;
  const html = `
  <div class="n n${taskNumber}">
    <div class="task task${taskNumber}">
      <input type="checkbox" class="taskCheck taskCheck${taskNumber}" onclick="checkboxChecked(${taskNumber})">
      <label class="taskContent taskContent${taskNumber}">${newTask}</label>
      <input type="button" class='renameButton renameButton${taskNumber}' onclick='renameTask(${taskNumber})' value="Rename">
      <input type="button" class='deleteButton deleteButton${taskNumber}' onclick="deleteTask(${taskNumber})" value="X" style="display: none">
    </div>
    <div class="taskRename taskRename${taskNumber}" style="display: none">
      <input type="text" class="renamedTask renamedTask${taskNumber}" value="${newTask}"><input type="button" onclick="submitTaskRename(${taskNumber})" value="✔">
    </div>
  </div>`;

  tasksList.insertAdjacentHTML("afterbegin", html);
  usersInput.value = "";
});

const renameTask = function (taskNumber) {
  const taskRename = document.querySelector(`.taskRename${taskNumber}`);
  const task = document.querySelector(`.task${taskNumber}`);

  task.style.display = "none";
  taskRename.style.display = "block";
};

const submitTaskRename = function (taskNumber) {
  const renamedTask = document.querySelector(`.renamedTask${taskNumber}`).value;
  const taskRename = document.querySelector(`.taskRename${taskNumber}`);
  const task = document.querySelector(`.task${taskNumber}`);
  const taskContent = document.querySelector(`.taskContent${taskNumber}`);

  taskRename.style.display = "none";
  task.style.display = "block";

  taskContent.textContent = renamedTask;
};

const checkboxChecked = function (taskNumber) {
  const taskContent = document.querySelector(`.taskContent${taskNumber}`);
  const checkbox = document.querySelector(`.taskCheck${taskNumber}`);
  const deleteButton = document.querySelector(`.deleteButton${taskNumber}`);
  const renameButton = document.querySelector(`.renameButton${taskNumber}`);

  if (checkbox.checked) {
    taskContent.style.color = "red";

    deleteButton.style.display = "block";
    renameButton.style.display = "none";
  } else {
    taskContent.style.color = "black";

    deleteButton.style.display = "none";
    renameButton.style.display = "block";
  }
};

const deleteTask = function (taskNumber) {
  const taskToDelete = document.querySelector(`.n${taskNumber}`);
  tasksList.removeChild(taskToDelete);
};
