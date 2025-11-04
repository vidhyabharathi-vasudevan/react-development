//Objects
//Key-Value pairs in {}

const newObj = { name: "Vidhyabharathi" };
console.log(newObj["name"]); //Vidhyabharathi

// we can have more than one key value pair and we can access the value from the key in object
console.log(newObj); //{name: 'Vidhyabharathi'}

//to get the name alone
console.log(newObj.name); //Vidhyabharathi

const obj = {
  isSubscriber: true,
  id: 678,
  content: {
    earn: "JS",
    grow: "gold",
  },
  subDivisions: ["Prepare", "Switch"],
  action: function () {
    return `Learn ${this.content.earn}`;
  },
};
console.log(obj); //{
//     isSubscriber: true,
//     id: 678,
//     content:{
//         earn:"JS",
//         grow:"gold"
//     },
//     subDivisions:['Prepare','Switch']
// }
console.log(obj.isSubscriber); //true
console.log(obj.id); //678
console.log(obj.content); //{
//     earn:"JS",
//     grow:"gold"
// },
console.log(obj.content.earn); //Js
console.log(obj.content.grow); //gold
console.log(obj.subDivisions); //['Prepare','Switch']
console.log(obj.subDivisions[1]); //Switch

//instead of dot operator we can use square brackets to access the keys
//example
console.log(obj["isSubscriber"]); //true

//we can declare a function to/ inside that object

console.log(obj.action()); //Hi from action function
//but remember this whatever data type we have whether is it boolean,array or object or function we should define the key first with : then we should assign the value

console.log(obj.action()); //Hi from action function
console.log(obj.action);
//ƒ (){
//     return "Hi from action function"
// }
//if we don't call the function with the () we'll get the whole fumction get printed

//this keyword-> to get the values inside the object in object
//example

console.log(obj.action()); //Learn JS

//this inside the object represent the object only that is obj

obj.newKey = "Hey";
obj.isSubscriber = false;
console.log(obj.newKey); //Hey
//like in array we can add new property here
console.log(obj); //{isSubscriber: false, id: 678, content: {…}, subDivisions: Array(2), action: ƒ, …}
//we can update them too but we can't completely reassign the value of object in const

const vehicle = {
  door: 2,
  engine: () => {
    return "Engine sounds";
  },
};
console.log(vehicle.engine()); //Engine sounds

// to inherit the properties of vehicle object
const car = Object.create(vehicle);
console.log(car.engine()); //Engine sounds
console.log(car); //{}
car.wheels = 4;
console.log(car); //{wheels: 4}
//we can modify the inherited properties of car
//ex
// car.door = 4
console.log(car.door); //4 with 89th line without that its 2

const tesla = Object.create(car);
console.log(tesla.door); //2 -> property from vehicle

const movie = {
  hero: "Vijay",
  heroien: "Sai pallavi",
  director: "Lokesh",
  music: "Aniruth",
};
console.log(Object.keys(movie)); //['hero', 'heroien', 'director', 'music'] -> it is returning a string array with the keys
console.log(Object.values(movie)); //['Vijay', 'Sai pallavi', 'Lokesh', 'Aniruth'] -> same as keys method it is just returning all values in an array

// To iterate through the object using for loop -> for in loop

for (let job in movie) {
  console.log(job); // job will have all the keys in every iteration //hero heroien director music -> in next next lines
  console.log(`${job} is ${movie[job]}`); //hero is Vijay like this all keys

  //   console.log(movie[job]); //will print all the values in next next lines
  //   console.log(movie.job); //undefined -> because we don't have any key as job so we are getting undefined. to get the value we can use movie[job] inside the for loop
}

//to delete particular key value pair from the object we can use delete keyword
delete movie.director;
console.log(movie); //{hero: 'Vijay', heroien: 'Sai pallavi', music: 'Aniruth'}

//to check if that particular property is there in the object or not
//we can use hasOwnProperty

console.log(movie.hasOwnProperty("director")); //false -> because we deleted the director property in the above lines -> there is no property called director now

//OBJECT DESTRUCTING

const movie1 = {
  hero: "Vijay",
  heroien: "Sai pallavi",
  director: "Lokesh",
  music: "Aniruth",
}; //object construction

const { music: NewVariableForThisMusicKey } = movie1;
console.log(NewVariableForThisMusicKey); //Aniruth -> we are just assigning the music value to NewVariableForThisMusicKey from the movie1 object --> object destructing

const {
  hero: newHero,
  heroien: newHeroien,
  director: newDirector,
  music: NewMusic,
} = movie1;
console.log(newHero, newHeroien, newDirector, NewMusic); //Vijay Sai pallavi Lokesh Aniruth

const {hero} = movie1
console.log(hero); //Vijay -> now hero is a new variable with the value of hero key in the movie1 object
console.log(movie.hero); //Vijay
//spelling must be same as keys in object then only we can deconstruct it

function sings(music){
    return music
}
//here music refers to the full object movie1
console.log(sings(movie1)); //{hero: 'Vijay', heroien: 'Sai pallavi', director: 'Lokesh', music: 'Aniruth'}

function sing({music}){
    return music
}
//here {music} refers the music key from the movie1 object
console.log(sing(movie1)); //Aniruth
//to pass only the key just use {} // key name must be same





