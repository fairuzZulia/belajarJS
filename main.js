// console.log("Hello World")
// alert("Ada Notifikasi")
// prompt("Pinjam duaratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is Hard"
// console.log(Promnet)
// var Promnet = "Nothing is Impossible"
// console.log(Promnet)

// let Promnet = "coding is fun"
// console.log(Promnet)
// let Promnet = " coding is fun"
// console.log(Promnet)

// const Promnet = " Coding is not my life"
// console.log(Promnet);
// const Promnet = " Coding is not my life banget"
// console.log(Promnet);

// let totalPoin = prompt("Masukkan Poin Anda")
//     if(totalPoin > 100){
//         document.write("Congratulation");
//         }else{
//             document.write("Keep Trying");
//     }

// let x = 6;
// let y = 3;

// if(x<10 && y>1){
//     document.write(a = "True");
//     }else{
//         document.write(a = "False");
// }

// if(x<10 && y<1){
//     document.write(b = "True");
//     }else{
//         document.write(b = "False");
// }

// if(x==5||y==5) {
//     document.write(c = "True");
//     }else{
//         document.write(c = "False");
// }

// if(x==6||y==5) {
//     document.write( d = "True");
//     }else{
//         document.write( d = "False");
// }

// if(!(x==y)) {
//     document.write( e = "True");
//     }else{
//         document.write( e = "False");
// }

// let x = 6;
// let y = 3;

// console.log(x<10 && y>1);
// console.log(x<10 && y<1);
// console.log(x==5||y==5);
// console.log(x==6||y==5);
// console.log(!(x==y));

// document.write(x<10 && y>1);
// document.write("<br>");
// document.write(x<10 && y<1);
// document.write("<br>");
// document.write(x==5||y==5);
// document.write("<br>");
// document.write(x==6||y==5);
// document.write("<br>");
// document.write(!(x==y));

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === "") {
    alert("Masukkan tugas terlebih dahulu");
    return;
  }

  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.appendChild(checkbox);

  const label = document.createElement("label");
  label.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";

  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  taskInput.value = "";

  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
