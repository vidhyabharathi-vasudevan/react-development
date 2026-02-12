// Scope of the variable -> var, let, const
var x = 1;
console.log(`global: ${x}`); //global: 1
var x = 2;
console.log(`global: ${x}`); //global: 2

//op: 2 overrides the latest one also we can declare the same variable name more than one time
// but after 2015 we are not using var [Afte ES6 = ECMA Specification]


//let 

//when you need to change the value in future

let a = 90;
console.log(`global: ${a}`); //global: 90
a = 60;
console.log(`global: ${a}`); //global: 60
//we can change the value once initialized also in line1 we can just define in line2 we can initialise
//op: a = 60


//const 
//const variable must be initialized when we define them
const v = 800;
console.log(`global: ${v}`); //global: 800
//we can't reassign the value of array and object but we can modify the const array and object
//const arr =[90,90]
//arr.push(78) -> this is possible
//arr=[78,90] -> this is not possible
//same for object too
//if we try to change it we will end up in TypeError: Assignment to constant variable.
// v = 90; 

const arr = [90,90];
console.log(`global: ${arr}`); //global: 90,90
arr.push(89);
console.log(`global: ${arr}`); //global: 90,90,89

//SCOPE:
//1) Global scope ->able to access that variable to the entire file
//2) local 
// i) block scope -> only available to that block {}
// ii) Function scope

let global = 'Global'
{
    let local = "Local"
    console.log(`block: ${local}`); //block: Local
    
}
console.log(`global: ${global}`); // global: Global
//console.log(local); //ReferenceError: local is not defined

function functionScope(){
    const fun = 90;
    console.log(`function: ${fun}`); //function: 90
}

functionScope();
// console.log(`global: ${fun}`); // //ReferenceError: fun is not defined

//var is a function scope
//ex 
function newfunction(){
var n = "actual";
{
    var n = "inside scope"
    console.log(n); // inside scope
}
console.log(n); //inside scope
//means first assigned to "actual" then assigned to "inside scope" but outside block also its "inside scope" because it carrys the latest value throughout the function

}
newfunction()





