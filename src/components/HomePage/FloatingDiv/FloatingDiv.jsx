import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2, text3, style}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} style={style} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
        <br />
        {text3}
      </span>
    </div>
  );
};

export default FloatinDiv;
