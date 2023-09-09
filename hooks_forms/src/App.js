import React, { useState } from "react";
const App = () => {
  // const state = useState();
  const [count, IncCount] = useState(0);
  const Increment = () => {
    IncCount(count + 1);
  };
  setTimeout(Increment, 1000);
  return (
    <>
      <div className="box">
        <h1 className="heading">{count}</h1>
        {/* <button onClick={Increment} className='btn'>Click</button> */}
      </div>
    </>
  );
};
export default App;

// import React, { useState } from "react";
// const App = () => {
//   let time = new Date().toLocaleTimeString();
//   // const state = useState();
//   const [currTime, IncCount] = useState(time);

//   const Increment = () => {
//     let time = new Date().toLocaleTimeString();
//     IncCount(time);
//   };
//   // setTimeout(Increment, 1000);
//   return (
//     <>
//       <div className="box">
//         <h1 className="heading">{currTime}</h1>
//         <button onClick={Increment} className="btn">
//           Click
//         </button>
//       </div>
//     </>
//   );
// };
// export default App;

// import React, {useState} from 'react';

// const App = () => {
//   const name = 'Click Me';
//   const bgColor = "lightGreen";
//   const [currColor, updateColor] = useState(bgColor);
//   const [currName, updateName] = useState(name);

//   const changeColor = () => {
//     updateColor('grey');
//     updateName('You Clicked once');
//   }

//   const changeColorDb = () => {
//     updateColor(bgColor);
//     updateName('You Clicked twice');
//   }

//   return(
//     <>
//       <div className='bgc' style={{backgroundColor: currColor}}>
//         <button className='button-bg' onMouseEnter={changeColor} onMouseLeave={changeColorDb}>{currName}</button>
//       </div>
//     </>
//   )

// }
// export default App;
