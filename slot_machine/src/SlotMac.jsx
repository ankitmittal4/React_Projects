import React from 'react';

const SlotMac = (props) => {
  // let x = props.x;
  // let y = props.y;
  // let z = props.z;
  let {x, y, z} = props;
  if(x===y && y===z){
    return(
      <div className='inner-slot'>
        <h1> {x} {y} {z}</h1>
        <h1>This is Matching</h1>
        {/* <hr></hr> */}
      </div>
    )
  }
  else{
    return(
      <div className='inner-slot'>
        <h1> {x} {y} {z}</h1>
        <h1>This is not Matching</h1>
        {/* <hr></hr> */}
      </div>
    )

  }
};
export default SlotMac; 