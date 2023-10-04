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
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
    // Prevents form submitting
    event.preventDefault();

    // Creates a to-do li in the HTML
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo");

    // Creates a span element
    const newTodo = document.createElement("span");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoLi.appendChild(newTodo);

    // Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoLi.appendChild(completedButton);


    // Bin Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoLi.appendChild(deleteButton);

    // Append to List
    todoList.appendChild(todoLi);

    //Clears Todo Input Value
    todoInput.value = "";
}

function checkOrDelete(event){

    //Checks Item 
    const item = event.target;
    console.log(item);

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
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

/*  This loops through all to do list categories.  
    The "event.target.value" loops through all cases, namely "all",
    "completed" and "uncompleted". */
function filterTodo(event) {

    const todos = todoList.children;
    
    for (let todo of todos){
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            /*  If the todo List checks "completed", 
                only show tasks that are done. */
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else {todo.style.display = "none";}  
                break;
            /*  If the todo List checks "uncompleted",
            only show tasks that are unfinished. */
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else { todo.style.display = "none"; }
                break;
    }
    }
}