import React from "react";
 
function Navbar(props) {
  return (

    <>
      <nav>
      
          <div className="main">
          <label  id="logo" className='logo'>{props.title}</label>
            <a href="/home" id="element" className="main">Home</a>
            <a href="/about"id="element" className="main">About</a>

          </div>
      </nav>
    </>
  );
}

 export default Navbar;