import React from "react";

const Content = () => {
  function handleChange() {
    const array = ["earn", "give", "make"];
    const ans = Math.floor(Math.random() * 3);
    console.log(array, ans);
    return array[ans];
    // this line just picking numbers from 0-2 randomly
    //whenever we reload / refresh this page or our site, we'll get anyone from the array because of that random
  }
  return <div>let's {handleChange()} money</div>;
};

export default Content;
