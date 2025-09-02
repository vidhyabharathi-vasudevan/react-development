//Map function:
// used to transform an array - iterate through the array and perform the given operation
//this map function takes a function as argument and performs the operation
// map - returns the array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map((item) => {
  return item * 2;
});

const arr = arr1.map((item) => item * 2);
//both arr2 and arr are valid syntax only
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

const arr3 = arr1.map(double);
const arr4 = arr1.map(triple);
const arr5 = arr1.map(binary);
console.log(arr2);

//Filter function
//used to filter in an array
//filter the odd numbers in an array
//returns the array
const odd = arr1.filter((item) => item % 2 == 1);
const even = arr1.filter((item) => item % 2 == 0);

//reduce function
//take the elements in an array and output as single element
//ex: sum of the array, max in that array, min in that array, product of that array
const sum = arr1.reduce((sum, item) => (sum = sum + item), 0); // -> this 0 is the initilal value to the sum
//reduce function takes 2 arguments, accumalator and current
//1 st argument = holds the result
//2 nd argument = current item from the array

const max = arr1.reduce((max, item) => (max = item > max ? item : max)); //-> initial value is optional, but for best practice we can use
