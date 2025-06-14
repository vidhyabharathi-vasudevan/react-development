// Switch statements

const n = 10;
switch(n){
    case 1:
        console.log(n);
        break;
    case 10:
        console.log(90);
        break;
    default:
        console.log(0);
        break;
}

//Stone Paper Scissors
//Game between Vidhya and Sowmiya

let vidhya = "Scissors"
let sowmiya = "Stone"

switch(vidhya){
    case sowmiya:
        // meams both sowm and vidh same action
        console.log("Tie");
        break;
    case "Stone":
        if(sowmiya === "Paper"){
            console.log("Sowmiya wins!");
            break;
        }else if(sowmiya === 'Scissors'){
            console.log("Vidhya wins");
            
        }
    case "Paper":
        if(sowmiya === "Scissors"){
            console.log("Sowmiya wins");
            break; 
        }else if(sowmiya === "Stone"){
            console.log("Vidhya wins");
            break;
        }
    case "Scissors":
        if(sowmiya === "Paper"){
            console.log("Vidhya wins");
            break;
        }else if(sowmiya === "Stone"){
            console.log("Sowmiya wins");
            break;
        }
    default:
        console.log("Case not matched");
        break;
        
        
}