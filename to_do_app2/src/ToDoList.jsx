import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const ToDoList = () => {
  const [item, setItem] = useState("");
  const [insertItem, setInsertItem] = useState([]);
  const changeText = (event) => {
    setItem(event.target.value);
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>To Do List</h1>
          <br></br>
          <input
            type="text"
            placeholder="Add Item"
            onChange={changeText}
          ></input>
          <button className="add-icon">
            <AddIcon />
          </button>

          <br></br>
          <ol>
            {insertItem.map((itemVal) => {
              return <li>{itemVal}</li>;
            })}
          </ol>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
