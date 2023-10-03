// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners

// Event Listener for Add Todo
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
    // Prevents form submitting
    event.preventDefault();

    // Creates a to-do DIV in the HTML
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Creates an li element
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Bin Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Append to List
    todoList.appendChild(todoDiv);

    //Clears Todo Input Value
    todoInput.value = "";
}

function deleteCheck(event){

    //Deletes Item
    const item = event.target;
    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }


}