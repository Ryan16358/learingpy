let inp = document.querySelector("#input");
let btn = document.querySelector("#button");
let ul = document.querySelector("ul");

// Load items from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || []; // Get list from storage or initialize an empty array

  // Loop through the stored todo list and add each item to the DOM
  todoList.forEach(function (itemText) {
    let item = document.createElement("li");
    item.innerText = itemText;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
  });
});

// Save new item to localStorage when it's added
btn.addEventListener("click", function () {
  let itemText = inp.value;
  if (!itemText) return; // Don't add if input is empty

  let item = document.createElement("li");
  item.innerText = itemText;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);

  // Save the new item to localStorage
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoList.push(itemText); // Add the new item to the array
  localStorage.setItem("todoList", JSON.stringify(todoList)); // Save it back to localStorage

  inp.value = ""; // Clear input field
});

// Event listener to delete items and update localStorage
ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    // Ensure it's a button click
    let listItem = event.target.parentElement; // Get the parent <li> element
    let itemText = listItem.firstChild.textContent.trim(); // Get the text of the item

    listItem.remove(); // Remove item from the DOM

    // Update the localStorage array by removing the deleted item
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList = todoList.filter(function (item) {
      return item !== itemText; // Remove the deleted item
    });
    localStorage.setItem("todoList", JSON.stringify(todoList)); // Update localStorage
  }
});
