//increament and decrementing a number

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
const App3 = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num === 0) {
      alert("Zero limit reached");
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="centre-div">
          <h1 className="cnt">{num}</h1>
          <div className="btn-div">
            <Tooltip title="Add">
              <Button className="btn-green" onClick={incNum}>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button className="btn-red" onClick={decNum}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
export default App3;
