var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");

while (input !== "quit"){
  if (input === "list") {
    listTodos();
  }
  else if (input === "new") {
    addTodo();
  }
  else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}

console.log("OK, you quit the app.");

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete.");
  todos.splice(index, 1);
  console.log("Deleted todo");
}

// Use a foreach to iterate through the array.
// var colors = ["red", "orange", "yellow", "green"];
// colors.forEach(color){
//   console.log(color);
// }
