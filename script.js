const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//input box cant be empty
function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    //creates a list item and x to delete it(x -- u00d7)
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}
//event to check tasks that are already done
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    //if x is pressed removes teh task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
},false)

//saves tasks to the browser storage
function saveTasks(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}
//saves task so it doesnt get deleted when the page is refreshed
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();