import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(1);
  const stateStyle = {
    fontStyle: "sans-sefif",
    fontSize: "80px",
    padding: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    fontStyle: "sans-sefif",
    fontSize: "80px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={stateStyle}>
      <button onClick={decrementCount} style={buttonStyle}>
        -
      </button>
      <p>{count}</p>
      <button onClick={incrementCount} style={buttonStyle}>
        +
      </button>
    </div>
  );
}

export default State;
