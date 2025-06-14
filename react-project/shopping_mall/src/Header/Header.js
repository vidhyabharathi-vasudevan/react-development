import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <header>
        {/* here header is not giving the bold/strong style h1 is bold header is just a tag (naming) */}
        <h1 className="shopping_mall"> Shopping mall </h1>
      </header>
    </>
  );
}
export default Header;
