// condition statement

// let color = "red";
// switch (color) {
//   case "green":
//     console.log("color is green");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   case "orange":
//     console.log("color is orange");
//     break;
//   case "red":
//     console.log("color is red");
//     break;
//   default:
//     console.log("color is not found");
//     break;
// }
// alert("hello");

// for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// *** while loop
// const favoriteMovie = "mission impossible";

// let guess = prompt("guess my favorite movie");

// while (guess !== favoriteMovie && guess !== "quite") {
//   guess = prompt(" wrong guess! guess again what's my favorite movie");
// }
// if (guess === favoriteMovie) {
//   console.log(`congratulation ${favoriteMovie} is my favorite movie`);
// } else {
//   console.log("you quite the game");
// }

// ***nested lop for
// let heroes = [
//   ["iron man", "thor"],
//   ["spider man", "ant man"],
//   ["black panther", "black widow"],
//   ["hulk", "doctor strange"],
//   ["superman"],
//   ["batman"],
//   ["wonder women", "flash"],
// ];

// for (let i = 0; i < heroes.length; i++) {
//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(heroes[i][j]);
//   }
// }

// ***practice while loop
// let todo = [];

// while (true) {
//   let req = prompt("please enter your request");
//   if (req === "quit") {
//     console.log("quitting app");
//     break;
//   }
//   if (req === "list") {
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//   } else if (req === "add") {
//     let task = prompt("please enter the task you want to add");
//  todo.push(task);
//     console.log("task added");
//   } else if (req === "delete") {
//     let idx = prompt("please enter the task index ?");
//  todo.splice(idx, 1);
//     console.log("task is deleted !");
//   } else {
//     console.log("wrong request");
//   }
// }

//  ***practice while loop
// let todo = [];

// while (true) {
//   let req = prompt("please enter your request (add, list, delete, quit)");

//   if (req === "quit") {
//     console.log("quitting app");
//     break;
//   }

//   if (req === "list") {
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//   } else if (req === "add") {
//     while (true) {
//       let task = prompt(
//         "please enter the task you want to add (type 'done' to finish adding tasks)"
//       );
//       if (task === "done") {
//         break;
//       }
//       todo.push(task);
//       console.log("task added");
//     }
//   } else if (req === "delete") {
//     let idx = prompt("please enter the task index ?");
//     if (idx >= 0 && idx < todo.length) {
//       todo.splice(idx, 1);
//       console.log("task is deleted !");
//     } else {
//       console.log("invalid index");
//     }
//   } else {
//     console.log("wrong request");
//   }
// }

// ***maximum method

// let arr = [7, 5, 8, 6, 4, 6, 6, 6];

// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// ***maximum method
