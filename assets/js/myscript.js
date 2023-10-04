// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const checkSound = new Audio('../sounds/crumble.mp3');
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

// Event Listener for Add Todo
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//Event Listener for the todo List
filterOption.addEventListener("click", filterTodo);

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

    //Completes Item 
    const item = event.target;
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        sound.play();
    }
    //Deletes Item
    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function (){
            todo.remove();
        });
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    console.log(todos);
}