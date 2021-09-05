import React from "react";

const Box = React.memo(({ colorArray, color }) => {
  return (
    <span
      className="box"
      style={{ backgroundColor: `${colorArray[color]}` }}
    ></span>
  );
});

export default Box;
