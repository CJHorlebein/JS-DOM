/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var todoList = document.getElementById("todo-list");
var addButton = document.getElementById("add-button");


addButton.addEventListener("click",function(){
    var description = document.getElementById("description").value;
    var newItem = document.createElement("li");
    newItem.addEventListener("click", function(){
        this.classList.add("checked");
    });  

    var button = document.createElement("button");
    button.innerHTML = "delete";
    button.classList.add("delete")
    button.classList.add("JS")
  
    newItem.appendChild(button);
    newItem.innerHTML += description;
    todoList.appendChild(newItem);

});

addButton.addEventListener("click",function(){
    var buttons = Array.from(document.getElementsByClassName("delete"));
    buttons.forEach(element => {
        if(element.classList.contains("JS")){
            element.classList.remove("JS");
            element.addEventListener("click", function(){
                element.parentElement.parentElement.removeChild(element.parentElement);
            });
        }
    });
});



