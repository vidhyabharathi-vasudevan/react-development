//Arrays
const myArr = [];
//push -> to insert the element at the last position
myArr.push('something')
myArr.push('other things')
myArr.push(90)
myArr.push(true)
console.log(myArr);//['something', 'other things', 90, true]
console.log(myArr.length); //4
//pop -> to delete the last element from the array
myArr.pop();
console.log(myArr); //['something', 'other things', 90]

//ushift -> to insert the element from the first position
myArr.unshift("Insertion at 0th index")
console.log(myArr); //['Insertion at 0th index', 'something', 'other things', 90]


// to delete the element from the fist position
myArr.shift();
console.log(myArr); //['something', 'other things', 90]
  

//push and unshift will return the "length" of the array (with newly added element -> length)
//pop and shift will return the element that gets deleted

// To delete the element from the specified index
console.log(myArr);

delete myArr[2]
console.log(myArr,"hi"); //
// ['something', 'other things', empty]
console.log(myArr[2]); //undefined

//to resolve this undefined problem we can use splice method

myArr.splice(2,1); //2 -> index, 1-> how many elements to be deleted
console.log(myArr); // ['something', 'other things']

//we can use splice method not only for deleting but for replacing too

myArr.splice(1,1,"Replaced string")
console.log(myArr); //['something', 'Replaced string']
//if you don't want to delete the element but need to add someting at specified index instead of 1 element just use 0 element

//slice -> will return a copy array after slicing from starting position to end position
console.log(myArr.reverse()); //['Replaced string', 'something']

//join method: -> will add all the elements in the array and return it as a string
console.log(myArr.join()); //Replaced string,something
//split is the opposite to this method
console.log(myArr.join().split(',')); //['Replaced string', 'something']
//but this will return everyelement as string, like true => 'true'

//to merge two arrays:
const arr1 = ['hi','hellow','how are you?',1,true] //['hi', 'hellow', 'how are you?', 1, true]
console.log(arr1);

const arr2 = ['yeah','i','am','good','HAU',0,false]
console.log(arr2); //['yeah', 'i', 'am', 'good', 'HAU', 0, false]

const arr3 = arr1.concat(arr2)
console.log(arr3); //['hi', 'hellow', 'how are you?', 1, true, 'yeah', 'i', 'am', 'good', 'HAU', 0, false]

console.log(arr1.concat(arr1));
//spread operator --> ...
const spreadArray = [...arr1,...arr2] // will make a single array
console.log(spreadArray); //['hi', 'hellow', 'how are you?', 1, true, 'yeah', 'i', 'am', 'good', 'HAU', 0, false]
const spreadA = [arr1,arr2] //arrays inside an array(spreadA) //arrays of array -> spreadA is a two dimensional array now
//
// (2) [Array(5), Array(7)]
// 0: (5) ['hi', 'hellow', 'how are you?', 1, true]
// 1: (7) ['yeah', 'i', 'am', 'good', 'HAU', 0, false]
//length: 2
console.log(spreadA);


console.log(...arr1,...arr2); //hi hellow how are you? 1 true yeah i am good HAU 0 false -> its a string















