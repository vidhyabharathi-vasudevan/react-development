//Document Object Model
//is a standard for accessing documents

//html dom
//html elements as objects
//The html dom is a standard for how to get, change,add elements

// > -> classname > div ---> inside that class for all the div element we are applying the styles
// + -> div + p -> next adjacent p only
// ~ div ~ p -> all adjacent p elements


const newDiv = document.createElement("div")
console.log(newDiv);


document.body.appendChild(newDiv) //appendChild is used to add the element to the body of the document

newDiv.textContent = "Hello There"
newDiv.style.width = '400px'
newDiv.style.height = '400px'
newDiv.style.backgroundColor = 'red'
newDiv.style.display = 'flex'
newDiv.style.flexDirection = 'row'
newDiv.style.justifyContent = 'Center'
newDiv.style.alignItems = 'Center'

