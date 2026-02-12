// 1) while loop:
// Initialization, body, Increment
let n = 1;
while (true) {
  if (n == 51) {
    break;
  }
//   console.log(n);
  n++;
}
//we should not write never ending loop

// 2) Do-while loop
//runs atleast once
//logs 90 without checking the condition
// when we need to run atleast once
let x = 90;
do {
  console.log(x);
} while (x < 90);

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}


// continue -> to break that particular iteration
//break -> to break the entire loop