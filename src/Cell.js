import React from "react";

const Cell = ({ val, x, y, onType }) => {
  const handleChange = (e) => {
    onType(x, y, e.target.value);
  }

  return (
    <div className="Cell">
      <input
        type="text"
        value={val}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Cell;
