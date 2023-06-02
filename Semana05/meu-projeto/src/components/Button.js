import React from "react";
import "../styles/Button.css";


function Button(props) {
    return (
      <>
        <button className="Btn">{props.prop1}</button>
      </>
    );
  }
  
  export default Button;