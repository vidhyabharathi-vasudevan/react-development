// Functions:
//Peace of code, can be reused as and when needed
console.log(sum(2, 5));
function sum(x, y) {
  return x + y;
}

//to get the userinfo from email id
//ex ip: Vidhya@gmail.com -> Vidhya
function shouldReturnName(name) {
  //   const arr = name.split("@");
  //   console.log(arr);
  //   return arr[0];
  //     or
  return name.slice(0, name.indexOf("@"));
}
console.log(shouldReturnName("Vidhya@gamil.com"));//Vidhya
console.log(shouldReturnName("Sowmiya2501@gmail.com")); //Sowmiya
console.log(shouldReturnName("Someone@yopmail.com")); //Someone

function toProperCase(a) {
  return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
}
console.log(toProperCase("sowioioi")); //Sowioioi

//Arrow function namesless functiom

const arrowFunction = (args) => {
  return args.toLowerCase();
};
console.log(arrowFunction("VIDHYA"));//vidhya

// Arrow Functions allow a shorter syntax for function expressions. You can skip the function keyword, the return keyword, and the curly brackets: const add = (a, b) => a * b;
// we skip return keyword when we don't have the curly brackets.


// difference between slice and splice
// slice -> returns a new array, without modifying the original array
// splice -> modify the original array -> removes the elements at index 

// const b= [1,2,3]
// b.slice(0,1)
// [1]
// b
// (3) [1, 2, 3]


// b.splice(0,1)
// [1]
// b
// (2) [2, 3]
