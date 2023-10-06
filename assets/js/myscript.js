/*jshint esversion: 6 */

// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

// Event Listener for Add Todo
todoButton.addEventListener("click", addTodo);
//Event Listener for Check or Delete
todoList.addEventListener("click", checkOrDelete);
//Event Listener for the todo List
filterOption.addEventListener("change", filterTodo);

/**
 * Adds a new todo item to the todo list.
 * Prevents adding if the input field is empty.
 * @param {Event} event - The click event when the "Add Todo" button is clicked.
 */
function addTodo(event) {
    // Prevents form submitting
    event.preventDefault();

    // Check if the input field is empty
    if (todoInput.value.trim() === "") {
        return; // Exit the function early if it's empty
    }

    // Creates a to-do li in the HTML
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo");

    // Creates a span element within the li Element
    const newTodo = document.createElement("span");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoLi.appendChild(newTodo);

    // Check Button for list
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoLi.appendChild(completedButton);

    // Bin Button for list
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoLi.appendChild(deleteButton);

    // Append to List
    todoList.appendChild(todoLi);

    //Clears Todo input value after entering a list item
    todoInput.value = "";

    // Check the current filter option and set display style accordingly
    const filterValue = filterOption.value;
    if (filterValue === "completed" && !todoLi.classList.contains("completed")) {
        todoLi.style.display = "none"; // Hide the new task in "completed" filter
    } else if (filterValue === "uncompleted" && todoLi.classList.contains("completed")) {
        todoLi.style.display = "block"; // Hide the new task in "uncompleted" filter
    }
}

/**
 * Handles checking and deleting todo items in the todo list.
 * Toggles completed status or deletes the item.
 * @param {Event} event - The change event when a todo item's checkbox is clicked.
 */
function checkOrDelete(event) {

    const item = event.target;
    //Checks Item as "completed"
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    //Deletes Item from the Todo List
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
}

/**
 * Filters todo items in the todo list based on the selected option.
 * Shows or hides items based on "all," "completed," or "uncompleted."
 * @param {Event} event - The click event when a filter option is selected.
 */
function filterTodo(event) {

    const todos = todoList.children;
    for (let todo of todos) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            /*  If the todo List checks "completed", 
                only show tasks that are done. */
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    }
}