let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")
let ourImg = document.getElementById("def-img")
ourForm.addEventListener("submit", (e) => { //create new item
  e.preventDefault()
  createItem(ourField.value)
})

ourForm.addEventListener("submit", (e) => {
  ourImg.style.visibility = "hidden"; //default img diseapper
})

ourForm.addEventListener("submit",  (e) => {
  const divWithClassExists = document.querySelectorAll(".new-item").length;
  if (divWithClassExists === 0) {
    ourImg.style.visibility = "initial";
  }
})

function createItem(x) {
  var text = document.getElementById("ourField").value;

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var color = document.getElementById("color").value;
  if (color === "red" || color === "blue" || color === "green" || color === "yellow"){
    color = document.getElementById(color).textContent;
  }

  if (x.length === 0) {
    alert("Task is empty!");
    return;
  }


  let ourHTML = '<div id="new-task" class="new-item">' + color + '<lable class="task-text">' + text + '</lable><lable class="edit-and-delete-btns"><button class="edit-btn" onclick="editItem()"><i class="fa-solid fa-pen"></i></button><button class="remove-btn" onclick="deleteItem(this)"></i><i class="fa-solid fa-trash-can"></i></button></lable><br><lable id="time-lbl">' + time + '</lable></div><br>'
  ourList.insertAdjacentHTML("afterbegin", ourHTML)
  ourField.value = ""
  ourField.focus()
}


function deleteItem(elementToDelete) {
  elementToDelete.parentElement.parentElement.remove();
}

function editItem(){
  const edit = document.querySelectorAll("#new-task");
  edit.forEach((item, i) => {
    item.contentEditable = "true";
  });
}
