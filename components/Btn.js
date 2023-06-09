import React from "react";

function Btn({ content, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {content}
    </button>
  );
}

export default Btn;
