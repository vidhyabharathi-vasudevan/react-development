// puzzle
// Take your name, generate one particular character everytime randomly
const name = "Vidhyabharathi";
const array = name.split("");
console.log(array);
const length = name.length;
const char = Math.floor(Math.random() * length);
console.log(array[char]);
//we can use charAt toof


