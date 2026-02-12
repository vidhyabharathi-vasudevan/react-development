// Ternary Operator - also called as conditional operator 
//syntax:
// Condidtion ? true : false

let subs = "";
let ans = subs ? "Welcome" : "Please subscribe";

console.log(ans);

let score = 90;
let grade =
  score > 90
    ? "A+"
    : score > 80
    ? "A"
    : score > 70
    ? "B+"
    : score > 60
    ? "B"
    : "Fail";

console.log(grade);

// stone paper scissors
let sowm = "Paper";
let vidh = "Paper";

const result =
  sowm === vidh
    ? "Tie"
    : sowm === "Stone"
    ? vidh === "Scissors"
      ? "Sowm wins"
      : "Vidhya wins"
    : sowm === "Paper"
    ? vidh === "Scissors"
      ? "Vidhya wins"
      : "Sowmiya wins"
    : vidh === "Paper"
    ? "Sowmiya wins"
    : "Vidhya wins";

    console.log(result);
    