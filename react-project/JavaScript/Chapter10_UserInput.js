alert("Hi Vidhya");

let bool = confirm("Are you sure to submit this form");
//this "confirm" returns true when they click ok and returns false when they click cancel
console.log(bool);

let promptx = prompt("Please enter something");
//using this prompt method we are able get a text field for entering prompt with label of Please enter something, if we click ok we'll get the prompt that we entered if we click cancel we are getting null value
// console.log(promptx);

// ?? -> null ternary operator
// console.log(promptx ?? "Cancelled it");
//this log will get only if promptx is null
//?? - null ternary operator -> false ?? true -> returns false -> the first one is false so returns false, it will not go for next one
//go to the second one if the first one is null/undefined


if (promptx === null) {
  console.log(promptx ?? "You entered your name but cancelled it");
} else {
  console.log("You didn't enter your name");
}

console.log(promptx.trim().length); // trim function to trim the extra spaces from the string

