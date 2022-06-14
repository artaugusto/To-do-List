let textTask = document.getElementById("textTask"),
  addTask = document.getElementById("addTask"),
  todoList = document.getElementById("todoList");

function createCheckbox() {
  var newDiv = document.createElement("div");
  var newInput = document.createElement("input");
  newInput.type = "checkbox";
  var newLabel = document.createElement("label");
  var text = document.createTextNode(textTask.value);
  var divAtual = document.getElementById("divAtual");

  newDiv.appendChild(newInput);
  newDiv.appendChild(newLabel);
  newLabel.appendChild(text);

  todoList.insertBefore(newDiv, divAtual);
}

addTask.addEventListener("click", function () {
  if (textTask.value.length > 0) {
    createCheckbox();
    textTask.value = "";
  }
});
