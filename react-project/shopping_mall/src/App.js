import "./App.css";

function App() {
  const array = ["earn", "give", "make"];
  const ans = Math.floor(Math.random()*3); // this line just picking numbers from 0-2 randomly
  //whenever we reload / refresh this page or our site, we'll get anyone from the array because of that random
  
  return (
    <>
      <p>Shall we start building a shopping mall?</p>
      <p>Lets {array[ans]} money</p>
    </>
  );
}

export default App;
