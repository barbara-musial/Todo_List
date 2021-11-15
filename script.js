"use strict";

const usersInput = document.querySelector("#usersInput");
const taskList = document.querySelector("#taskList");

document.querySelector("#addTaskButton").addEventListener("click", function () {
  console.log(usersInput.value);

  const html = `
  <tr>
    <td>
        <form><input type="checkbox"><label>${usersInput.value}</label></form>
    </td>
    <td class='buttons-align'>
        <form><input type="button" value="Rename"></form>
    </td>
  </tr>`;

  Element.insertAdjacentHTML(beforebegin, html);
});
