let ul = document.querySelector("ul");
let lis = document.querySelector("li");
let btn = document.querySelector("span");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  addTask();
});

// Add an event listener for the "Enter" key press on the input fielda
inp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  let item = document.createElement("li");
  if (inp.value !== "") {
    item.innerText = inp.value;
    item.className = "list";

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "x";
    dltbtn.setAttribute("class", "dltbtn");

    ul.appendChild(item);
    item.appendChild(dltbtn);
  } else {
    console.log("Please add some task");
  }
  inp.value = "";
}

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.classList.add("slide-out"); // Add slide-out animation class

    // Remove the item from the DOM after the animation completes
    setTimeout(function () {
      listItem.remove();
      console.log("deleted");
    }, 300);
  }
});
