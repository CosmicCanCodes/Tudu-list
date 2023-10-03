//Selectors
var todoInput = document.selectElementByClassName("todo-input");
var todoButton = document.selectElementByClassName("todo-button");
var todoList = document.selectElementByClassName("todo-list");

//Event Listeners

//Event Listener for Add Todo 
todoButton.addEventListener("click", addTodo);


//Functions
function addTudu(event){
    //Prevents form subitting
    event.preventDefault();

    // creates a to do DIV in the html
    var tuduDiv = document.createElement("div");
    tuduDiv.classlist.add("tudu");

    // creates an li element
    var newTudu = document.createElement("li");
    newTudu.innertext ="hey";
    newTudu.classlist.add("tudu-item");
    tuduDiv.appendChild(newTudu);

    //Check Button
    var completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class="fas fa-check"> </i>";
    completedButton.classList.add("complete-btn");
    tuduDiv.appendChild(completedButton);

    //Bin Button
    var binButton = document.createElement("button");
    bindButton.innerHTML = "<i class="fas fa-trash"> </i>";
    binButton.classList.add("complete-btn");
    tuduDiv.appendChild(binButton);

    //Append to List 
    tuduList.appendChild(tuduDiv);

}