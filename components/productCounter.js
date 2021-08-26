import React, { useState } from "react";

const ProductCounter = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="counter">
      <span
        style={{
          cursor: "pointer",
          color: "#AEC2EA",
        }}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </span>
      <span style={{ fontSize: 16, fontWeight: 400, color: "#2D2D2F" }}>
        {counter}
      </span>

      <span
        style={{
          cursor: "pointer",
          color: "#AEC2EA",
        }}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </span>
    </div>
  );
};

export default ProductCounter;
