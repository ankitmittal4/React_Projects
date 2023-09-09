import React, { useState } from "react";
const App2 = () => {
  const [fullName, setFullName] = useState({
    name: "",
    password: "",
    email: "",
    number: "",
  });

  const inputEvent = (event) => {
    // setName(event.target.value);
    console.log(event.target.value);
    console.log(event.target.name);

    // const value  = event.target.value;
    // const name  = event.target.name;
    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };

      // if(name === 'name'){
      //     return {
      //         name: value,
      //         password: preValue.password,
      //         email: preValue.email,
      //         number: preValue.number,
      //     }
      // }
      // else if(name === 'password'){
      //     return {
      //         name: preValue.name,
      //         password: value,
      //         email: preValue.email,
      //         number: preValue.number,
      //     }
      // }
      // else if(name === 'email'){
      //     return {
      //         name: preValue.name,
      //         password: preValue.password,
      //         email: value,
      //         number: preValue.number,
      //     }
      // }
      // else if(name === 'number'){
      //     return {
      //         name: preValue.name,
      //         password: preValue.password,
      //         email: preValue.email,
      //         number: value,
      //     }
      // }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };
  return (
    <>
      <div className="main-div">
        <form onSubmit={onSubmit}>
          <div className="container">
            <h1 className="heading">
              Hello {fullName.name} {fullName.password}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.number}</p>

            <input
              type="text"
              className="input"
              placeholder="Enter Something"
              name="name"
              onChange={inputEvent}
              value={fullName.name}
            />

            <input
              type="text"
              className="input"
              placeholder="Enter Password"
              name="password"
              onChange={inputEvent}
              value={fullName.password}
            />

            <input
              type="email"
              className="input"
              placeholder="Enter E-Mail"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />

            <input
              type="number"
              className="input"
              placeholder="Enter Number"
              name="number"
              onChange={inputEvent}
              value={fullName.number}
            />

            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App2;
