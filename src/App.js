import React, { useState } from 'react'
import Counter from './Components/Counter'



function App() {

const [state,setState]=useState(false)

  return (
    <div>
     
      <h1 onClick={()=>setState(!state)}>Show</h1>
      {/* //state=false;
      //!state=true */}
     {state?  <Counter/> : ""} 
    </div>
  )
}

export default App
