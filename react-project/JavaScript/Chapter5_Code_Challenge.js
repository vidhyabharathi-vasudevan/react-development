// puzzle
// Take your name, generate one particular character everytime randomly
const name = "Vidhyabharathi";
const array = name.split("");
console.log(array);//['V','i','d','h','y','a'.....]
const length = name.length;
const char = Math.floor(Math.random() * length);
console.log(array[char]);
console.log(name.charAt(char))
//we can use charAt too in that string


