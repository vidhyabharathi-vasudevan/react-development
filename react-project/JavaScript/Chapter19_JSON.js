//JSON -> Javascript Object Notation
//text format
// to send and retrieve data in many programming languages

const myObj = {
    name:"Vidhyabharathi Vasudevan",
    age:23,
    profession:'Frontend developer',
    task : ()=>{
        console.log("Just Coding!");
        
    }

}
console.log(myObj); //{name: 'Vidhyabharathi Vasudevan', age: 23, profession: 'Frontend developer', task: ƒ}

const newJSON = JSON.stringify(myObj)
console.log(newJSON); //{"name":"Vidhyabharathi Vasudevan","age":23,"profession":"Frontend developer"} //string format

//if we have function in the object we will not get here(in JSON)
console.log(newJSON.name); //undefined
console.log(typeof newJSON); //string
console.log(typeof myObj); //
class Hi{
  constructor(){
    this.type = 'type'
  }
}
console.log(typeof Hi); //function

//receiving JSON form the server side
const receiveJSON = JSON.parse(newJSON)
console.log(receiveJSON); //{name: 'Vidhyabharathi Vasudevan', age: 23, profession: 'Frontend developer'}
console.log(typeof receiveJSON);//object
//To convert the string json to object we can use parse function
//its parsing the string into an object








