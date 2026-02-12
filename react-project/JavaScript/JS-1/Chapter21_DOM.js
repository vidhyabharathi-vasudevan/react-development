//Document Object Model
//is a standard for accessing documents

//html dom
//html elements as objects
//The html dom is a standard for how to get, change,add elements

// > -> classname > div ---> inside that class(className) for all the div element we are applying the styles
//example: > === placeholder-text > div = inside placeholder all div
// + -> div + p -> next adjacent p only
// ~ div ~ p -> all adjacent p elements

// > == inside, + == next adjacent onlu ~ == all adjacent
function createElements() {
  const newDiv = document.createElement("div");
  console.log(newDiv);

  document.body.appendChild(newDiv); //appendChild is used to add the element to the body of the document // visible in browser

  newDiv.textContent = "Hello There";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = "red";
  newDiv.style.display = "flex";
  newDiv.style.flexDirection = "row";
  newDiv.style.justifyContent = "Center";
  newDiv.style.alignItems = "Center";
}
function returnSpace() {
  const p = document.createElement("p");
  p.textContent = "";
  document.body.appendChild(p);
}

for (let i = 1; i <= 12; i++) {
  createElements();
  returnSpace();
}
