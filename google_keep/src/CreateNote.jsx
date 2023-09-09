import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main-note" onDoubleClick={backToNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
            ></input>
          ) : null}

          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a Note..."
            autoComplete="off"
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button className="mui-btn" onClick={addEvent}>
              <AddIcon className="plus-sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
