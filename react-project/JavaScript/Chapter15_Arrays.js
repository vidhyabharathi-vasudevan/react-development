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









