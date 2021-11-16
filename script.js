"use strict";
let tasks = [];

const usersInput = document.querySelector("#usersInput");
const tasksList = document.querySelector("#tasksList");
const addTaskButton = document.querySelector("#addTaskButton");

addTaskButton.addEventListener("click", function () {
  tasks.push(usersInput.value);
  const html = `
  <div id="n${tasks.length}">
    <div id="task${tasks.length}">
       <input type="checkbox" id="taskCheck${tasks.length}" onclick="checkboxChecked(${tasks.length})"><label id="taskContent${tasks.length}">${usersInput.value}</label><input type="button" id='renameButton${tasks.length}' onclick='renameTask(${tasks.length})' value="Rename"><br>
    </div>
  </div>
  `;

  tasksList.insertAdjacentHTML("afterbegin", html);

  usersInput.value = "";
});

const renameTask = function (taskNumber) {
  const task = document.getElementById(`taskContent${taskNumber}`).textContent;
  const taskn = document.getElementById(`n${taskNumber}`);
  const taskDivDelete = document.getElementById(`task${taskNumber}`);

  taskn.removeChild(taskDivDelete);

  const html = `
  <div id="taskRename${taskNumber}">
    <input type="text" id="renamedTask${taskNumber}" value="${task}"><input type="button" onclick="submitTaskRename(${taskNumber})" value="✔"><br>
  </div>
  `;

  taskn.insertAdjacentHTML("afterbegin", html);
};

const submitTaskRename = function (taskNumber) {
  const renamedTask = document.getElementById(`renamedTask${taskNumber}`).value;
  const taskRenameDivDelete = document.getElementById(
    `taskRename${taskNumber}`
  );
  const taskn = document.getElementById(`n${taskNumber}`);

  taskn.removeChild(taskRenameDivDelete);

  const html = `
  <div id="task${taskNumber}">
       <input type="checkbox" id="taskCheck${taskNumber} onclick="checkboxChecked(${taskNumber})"><label id="taskContent${taskNumber}">${renamedTask}</label><input type="button" id='renameButton${taskNumber}' onclick='renameTask(${taskNumber})' value="Rename"><br>
    </div>
  `;

  taskn.insertAdjacentHTML("afterbegin", html);
};

const checkboxChecked = function (taskNumber) {
  const task = document.getElementById(`task${taskNumber}`);
  const renameButton = document.getElementById(`renameButton${taskNumber}`);
  const taskContent = document.getElementById(`taskContent${taskNumber}`);
  const checkbox = document.getElementById(`taskCheck${taskNumber}`);
  const deleteButton = document.getElementById(`deleteButton${taskNumber}`);

  if (checkbox.checked) {
    taskContent.style.color = "red";
    task.removeChild(renameButton);
    const html = `
    <input type="button" id='deleteButton${taskNumber}' value="X">
    `;
    taskContent.insertAdjacentHTML("afterend", html);
  } else {
    taskContent.style.color = "black";
    const html = `
    <input type="button" id='renameButton${taskNumber}' onclick='renameTask(${taskNumber})' value="Rename">
    `;
    task.removeChild(deleteButton);
    taskContent.insertAdjacentHTML("afterend", html);
  }
};
