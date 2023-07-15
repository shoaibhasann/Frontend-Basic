let inputTodo = document.getElementById("toDo");
const addBtn = document.getElementById("addToDo");
let showTodo = document.getElementById("myToDo");
let status = document.getElementById("status");
let remove = document.getElementById("remove");
let mark = document.getElementById("mark");
let edit = document.getElementById("edit");
const updateContainer = document.getElementById('updateContainer');
const inputUpdate = document.getElementById('updateText');
const updateBtn = document.getElementById('update');
const closeBtn = document.getElementById('close');

addBtn.addEventListener("click", () => {
  showTodo.innerHTML = inputTodo.value;
  status.innerHTML = 'Status : Pending'
});

// Update status of todo
mark.addEventListener("click", () => {
  if (inputTodo.value !== "") {
    mark.innerHTML = "Mark Pending";
    mark.style.backgroundColor = "#ffff00";
    mark.style.color = "#000";
    status.innerHTML = "Status: Completed";
  }
});

// Delete todo
remove.addEventListener("click", () => {
  inputTodo.value = "";
  showTodo.innerHTML = "";
  status.innerHTML = "";
  mark.innerHTML = "Mark Completed";
  mark.style.backgroundColor = "#008000";
  mark.style.color = "#fff"
});

// edit todo

edit.addEventListener('click', () => {
     if(inputTodo.value !== ""){
       updateContainer.style.display = "flex";
     }
});

// update todo 
updateBtn.addEventListener('click', () => {
     showTodo.innerHTML = inputUpdate.value
     inputTodo.innerHTML = '';
     inputUpdate.value = ''
});


// close update container
closeBtn.addEventListener('click', () => {
    updateContainer.style.display = "none"
});

