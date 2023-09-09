import React from "react";
const AddItems = (props) => {
  return (
    <>
      <div className="to-do-style">
        <button
          className="remove-btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default AddItems;
