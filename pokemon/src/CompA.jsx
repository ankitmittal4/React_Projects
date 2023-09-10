import React, { useState, useEffect } from "react";
import axios from "axios";
const CompA = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [firstMove, setFirstMove] = useState();

  useEffect(() => {
    // alert("Hi");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/type/${num}`);
      console.log(res);
      console.log(res.data.moves.length);
      setName(res.data.name);
      setMoves(res.data.moves.length);
      setFirstMove(res.data.moves[0].name);
    }
    getData();
  });
  return (
    <>
      <h1 className="first-heading">
        You Choose <span style={{ color: "red" }}> {num} </span> value
      </h1>
      <br />
      <h1>
        My Name is <span style={{ color: "red" }}> {name}</span>
      </h1>
      <br />
      <h1>
        I have <span style={{ color: "red" }}>{moves} </span> moves
      </h1>
      <br />
      <h1>
        My First move is <span style={{ color: "red" }}>{firstMove} </span>
      </h1>
      <br />
      <div className="box">
        <select
          className="select"
          //   value="3"
          onClick={(event) => {
            setNum(event.target.value);
          }}
        >
          <option value="2">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
    </>
  );
};
export default CompA;
