"use strict";
let tasks = [];

const usersInput = document.getElementById("usersInput");
const tasksList = document.getElementById("tasksList");
const addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("click", function () {
  tasks.push(usersInput.value);

  const html = `
  <div id="n${tasks.length}">
    <div id="task${tasks.length}">
      <input type="checkbox" id="taskCheck${tasks.length}" onclick="checkboxChecked(${tasks.length})">
      <label id="taskContent${tasks.length}">${usersInput.value}</label>
      <input type="button" id='renameButton${tasks.length}' onclick='renameTask(${tasks.length})' value="Rename">
      <input type="button" id='deleteButton${tasks.length}' onclick="deleteTask(${tasks.length})" value="X" style="display: none">
    </div>
    <div id="taskRename${tasks.length}" style="display: none">
      <input type="text" id="renamedTask${tasks.length}" value="${usersInput.value}"><input type="button" onclick="submitTaskRename(${tasks.length})" value="✔">
    </div>
  </div>`;

  tasksList.insertAdjacentHTML("afterbegin", html);
  usersInput.value = "";
});

const renameTask = function (taskNumber) {
  const taskRename = document.getElementById(`taskRename${taskNumber}`);
  const task = document.getElementById(`task${taskNumber}`);

  task.style.display = "none";
  taskRename.style.display = "block";
};

const submitTaskRename = function (taskNumber) {
  const renamedTask = document.getElementById(`renamedTask${taskNumber}`).value;
  const taskRename = document.getElementById(`taskRename${taskNumber}`);
  const task = document.getElementById(`task${taskNumber}`);
  const taskContent = document.getElementById(`taskContent${taskNumber}`);

  taskRename.style.display = "none";
  task.style.display = "block";

  taskContent.textContent = renamedTask;
};

const checkboxChecked = function (taskNumber) {
  const taskContent = document.getElementById(`taskContent${taskNumber}`);
  const checkbox = document.getElementById(`taskCheck${taskNumber}`);
  const deleteButton = document.getElementById(`deleteButton${taskNumber}`);
  const renameButton = document.getElementById(`renameButton${taskNumber}`);

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
  const taskToDelete = document.getElementById(`n${taskNumber}`);
  tasksList.removeChild(taskToDelete);
};
