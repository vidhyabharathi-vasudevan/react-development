console.log('Hello world')
//both syntax are correct, we can follow
console.log(typeof '5');
console.log(typeof(5))


//Strings:
 let myV = 'Vidhyabharathi';
 console.log(myV.length);

//Methods;
console.log(myV.charAt(13));  //returns the character at given index
console.log(myV.indexOf('h')); //returns the index of given character and returns -1 if the given character is not found 
//also if there are 2 occurance for that particular character it returns the first one(Case sensitive)

console.log(myV.lastIndexOf('a')); // unlike indexof it returns the last index of that particular string if it occurs more than one time(Case-sensitive)

console.log(myV.slice(5,8)); //O/p: abh because its starting from 5th index and slices till 7th index since the end index is exclusive, if no end index, it will print till end of string

console.log(myV.toLowerCase()); //vidhyabharathi
console.log(myV.toUpperCase())  //VIDHYABHARATHI
console.log(myV.includes('i')); // just check whether that particular character or string exist in that string returns a boolean value if its there(Case sensitive)
console.log(myV.split('i')); // returns a string array with the values of splited strings when it finds i op:['V', 'dhyabharath', '']
console.log(myV.split("")); //['V', 'i', 'd', 'h', 'y', 'a', 'b', 'h', 'a', 'r', 'a', 't', 'h', 'i']


//Number

const a = 42;
console.log(a); // 42
const b = "42.0432323fff";
console.log(b); // 42
const c = 42.01 
console.log(c); //42.01

console.log(Number('1')); //Op: 1 with number type

console.log(Number("Vidhya")); //NaN
console.log(Number(true)); //1 for false its 0
console.log(Number(undefined)); //NaN

console.log(Number.isInteger(a));
console.log(Number.isInteger(c));
console.log(Number.parseFloat(b).toFixed(3));
console.log(a.toString());

console.log(Number.isNaN("Vidhya")); //false
console.log(isNaN("Vidhya")) // true




















 
