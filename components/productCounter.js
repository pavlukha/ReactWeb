import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { getCounter } from "../orm/actions/index";

const ProductCounter = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCounter(counter));
  // }, [counter]);

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

// function mapStateToProps(state) {
//   // console.log("STATE: ", state);

//   return {
//     counter: state.counter,
//   };
// }

export default connect()(ProductCounter);
