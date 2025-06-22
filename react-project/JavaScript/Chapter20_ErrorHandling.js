//Errors and Error Handling

"use strict"
//1) Reference Error
// variable = 'Heyyy'
// console.log(variable);//Heyy
//Without strict mode the above line of code will work fine
//to avoid this we can use strict mode

//now the line number 4 throws an error saying: ReferenceError variable os not defined -> we have initialized a value for that variable but we didn't define the variable

//to solve the above issue we must declare the variable as let or const


//2) Syntax error
// Object..create(); -> results in syntax error

//3) TypeError
//  const hi = 'hi'
//  hi = 'hello' //TypeError: Assignment to constant variable.

 //Syntax error we can find before running but the other 2 errors Typeerror and reference error will come in the run time


 //Error handling -> as you know try catch

 const makeError = () =>{
    try{
        const hellow = 'Hello'
        hellow = 'hi'
    }catch(error){
        console.log('Please dont stop the execution',error); //Please dont stop the execution TypeError: Assignment to constant variable. -> as a statement or log
        console.error('Please dont stop the execution',error); //Please dont stop the execution TypeError: Assignment to constant variable.
    // at makeError -> as error
    console.warn('Please dont stop the execution',error);//Please dont stop the execution TypeError: Assignment to constant variable. -> as a warning
    console.table(error) //(index)
// Value
// stack	'TypeError: Assignment to constant variable.\n at…1:5500/JavaScript/Chapter20_ErrorHandling.js:39:2'
// message	'Assignment to constant variabl -> in table formate

//there are many like these just refer mdn documentation

console.log(error.name); //TypeError

    }
 }
 makeError()
 console.log('code will run now');
 


