import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const date = new Date().getDate();
  const time = new Date().getTime();
  const month = new Date().getMonth();
  const fullDate = new Date();

  console.log(fullDate);
  console.log(date);
  console.log(time);
  console.log(month);

  return (
    <footer>
      <p className="footer-text">Copyrights &copy; {year}</p>
      {/* <p>{date}</p>
      <p>{time}</p>
      <p>{month}</p> */}
      {/* <p>{fullDate}</p> */}
      {/* <p>{}</p> */}
    </footer>
  );
};

export default Footer;
