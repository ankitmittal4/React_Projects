import React, { useState } from "react";
import "./App.css";
import AddItems from "./AddItems";
const App2 = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]); //Now item stores empty array
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const addList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="inner-div">
        <div className="center-div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a To-do List"
            onChange={itemEvent}
            value={inputList}
          ></input>
          <button onClick={addList}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemVal, index) => {
              return (
                <AddItems
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App2;
