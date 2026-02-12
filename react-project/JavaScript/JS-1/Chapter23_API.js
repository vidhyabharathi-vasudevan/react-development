// Web Storage API -> the Web storage API provides mechanisms by which browsers can store key/value
//pairs in a much more intuitive fashion than using cookies.
// 2 mechanisms as follows

//1) session storage -> maintains a separate storage area for each given orgin that's available for the duration of the page session
//(as long as the browser is open, including the page reloads and restored)
// * Stores data only for a session, meaning the data is stoted until the browser's tab is closed
// * Data is never transferred to the server
// * Storage limit is larger than a cookie(at most 5MB).

//2) local storage -> does the same thing, but persists even when the browser is closed and reopened.
// * Stores data with no expiration date and gets cleared only throgh Javascript or clearing the Browser's cache/ Locally stored data.
// * Storage limit is the maximum among session storage and cookie


//Comparison summary of cookies, Local storage and session storage
// Feature	        Cookies	        	 Session Storage                    Local Storage
// Capacity	        4KB (Small)	    	 5MB (Large)                        5MB - 10MB (Large)
// Expires	        Manually set    	 When Tab is closed                 Never
// Sent to Server?	Yes	            	 No                                 No
// Access	          Any window	    	 Only that specific tab             Any window

//To access the sessionStorage and localStorage
//Window.sessionStorage || Widow.localStorage


//API -> Application Programming Interface

document.addEventListener("readystatechange", (event) => {
if(event.target.readyState === 'complete'){
    console.log('complete')
    initApp();

}
});
const initApp = () => {
  console.log('hi')
//  const myContent = ['Earn','Grow','Give']
 const myObject = {
  name:'Vidhyabharathi',
  myContent:['Earn','Grow','Give'],
  logName: function () {
    console.log(this.name) //this -> this object
  }
 };
 window.sessionStorage.setItem('mySessionStorage',JSON.stringify(myObject));
 const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
 console.log(mySessionData,"MYSESSIONDATA")
};
