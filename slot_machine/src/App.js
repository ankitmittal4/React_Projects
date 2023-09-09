import React from 'react'
import SlotMac from './SlotMac'



const App=()=>{
  return(
    <>
      <h1 className='heading-style'>
        Welcome to <span style={{fontWeight: 'bold'}}>Slot Machine Game</span>
      </h1>
      <div className='slot-machine'>
        <SlotMac  x='3' y='4' z='3'/><hr/>
        <SlotMac  x='3' y='3' z='3'/><hr/>
        <SlotMac  x='2' y='7' z='2'/><hr/>
        <SlotMac  x='2' y='7' z='2'/><hr/>
        <SlotMac  x='2' y='7' z='2'/><hr/>
        <SlotMac  x='2' y='7' z='2'/><hr/>
        <SlotMac  x='2' y='7' z='2'/><hr/>
        <SlotMac  x='2' y='7' z='2'/><hr/>

      </div>
    </>

  )
}
export default App;