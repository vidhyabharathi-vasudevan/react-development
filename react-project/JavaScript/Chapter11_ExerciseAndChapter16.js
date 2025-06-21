// gonna design stone paper scissors as interactive game
const resultFunc = (comp,user)=>{
  return  comp === user
          ? "Tie game"
          : comp === "Stone"
          ? user === "Scissors"
            ? "Computer wins"
            : "User wins"
          : comp === "Paper"
          ? user === "Scissors"
            ? "User wins"
            : "Computer wins"
          : user === "Paper"
          ? "Computer wins"
          : "User wins";
}
console.log(location);
let conf = confirm("Shall we play Stone Paper Scissors?");
// console.log(conf);
while (true) {
  if (conf) {
    let user = prompt("Please enter Stone or Paper or Scissors")?.trim();
    console.log(user);
    let rand = Math.floor(Math.random() * 3);
    const arr = ["Stone", "Paper", "Scissors"];
    let comp = arr[rand];
    console.log(comp);
    if (user) {
      const result = resultFunc(comp,user)
      alert(result);
        console.log(result);
      let x = confirm("Play Again?");
      if (x) {
        continue;
      }else{
        alert("Thanks for playing")
        break;
      }
    
    } else {
      alert("Okay, You changed your mind,Thanks");
      break;
    }
  } else {
    alert("Thanks for coming here!");
    break;
  }
}


//location.reload()  -> this function used to reload the website
