import React from "react";
import { useState } from "react";

function TextBox(props) {
  const toUpper = () => {
    const changed = Text.toUpperCase();
    setText(changed);
  };
  
  const toLower = () => {
    setText(Text.toLowerCase());
  };
  const toReverseText = () => {
    setText(Text.split("").reverse().join(""));
  };

  const clear = () => {
    setText(" ");
  };
  const onHandleChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  let Trim = Text.trim();

  return (
    <>
      <h1>{props.heading}</h1>

      <div className="text">
        <textarea
          name="text"
          className="textBox"
          value={Text}
          onChange={onHandleChange}
          id="text"
          cols="100"
          rows="10"
          placeholder="Enter Your Text Here"
        ></textarea>
      </div>

      <div className="btns">
        <button className="btn" onClick={toUpper}>
          convertToUpperCase
        </button>
        <button className="btn" onClick={toLower}>
          convertToLowerCase
        </button>
        <button className="btn" onClick={toReverseText}>
          reverse
        </button>
        <button className="btn" onClick={clear}>
          clear
        </button>
      </div>

      <div className="count" id="count">
        {Trim.length > 0 ? (
          <>
            <p>Letters:{Trim.replace(/\s+/g, "").length}</p>
            <p>Words:{Trim.split(" ").length}</p>
            <p>Reading Time:{0.08 * Trim.split(/\s+/).length.toFixed()}</p>
          </>
        ) : (
          <>
            {" "}
            <p>Letters:0</p>
            <p>Words:0</p>
            <p>Reading Time:0</p>{" "}
          </>
        )}
      </div>

      <h2 className="heading">Modified Text</h2>

      <p className="output">{Text}</p>
    </>
  );
}

export default TextBox;
