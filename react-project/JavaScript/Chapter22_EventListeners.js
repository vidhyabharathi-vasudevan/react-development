
//Event Listeners
//Syntax
//addEventListener(eventName,function,useCapture)
const onClickingOfElement = () => {
  alert("Hey there you clicked Event Listners");
};

// element.addEventListener("click", onClickingOfElement, false); //this will throw an alert message when this is clicked
// element.addEventListener("click",(event)=>{
// event.target.textContent="Clicked the Event Listeners"
// }) //this event.target = "Event Listeners" i.e the content of the div element, so if we change the textContent of the div on click it will reflect in page from Event Listeners to Clicked the Event Listeners

document.addEventListener('readystatechange',(event)=>{
    console.log(event.target.readyState); //complete - that is the readystatechange means all the data from the server is loaded now, we are ready to start the app now
    initApp()
    
})
const initApp = () =>{
const element = document.createElement("button");
document.body.appendChild(element);
element.textContent = "Event Listeners..";
element.style.height = "200px";
element.style.width = "200px";
element.style.backgroundColor = "green";
element.style.alignItems = "center";
element.style.display = "flex";
element.style.justifyContent = "center";
element.style.hover = "cursor";
element.addEventListener('click',(event)=>{
  event.preventDefault() // stops the browser from auto reloading 
  if(element.textContent ==='Event Listeners..'){
    element.textContent ="Inside initApp"
  }else{
    element.textContent = 'Event Listeners..'
  }
    //or
    // event.target.textContent = 'Inside initApp'
    //anyone is fine
    element.style.backgroundColor='yellow'
    
})
}

//Event doubling up in js
// Event bubbling in JavaScript is a mechanism within the Document Object Model (DOM) where an event, when triggered on an element, first executes any handlers attached to that element and then propagates upwards through its ancestor elements in the DOM tree. This process continues until the event reaches the document object or the root of the DOM. 
//for example if we have a div and inside that we have h1 and we have 2 clickevents for div and h1 if we click h1 the event will reflect for both h1 and div -> only reflect parent, ie if we click child -> parent will affect till root ->  if we click parent -> child will not get affected

//to stop this event doubling up -> we can use event.stopPropagation -> if we click child only child will get impacted that is that event will get perfomed not for parent one

//opposite for this doubling up -> useCapture as true -> top down -> even if we click the child first -> actions for parent will happen first
//9.29 mins



