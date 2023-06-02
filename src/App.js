import React, { useState } from 'react'
import Counter from './Components/Counter'



function App() {

const [count,setCount]=useState(0)
  
  const addcount = ()=>{
   setCount (count+1)
  
  } 

  return (
    <div>
     
      <button onClick={addcount}>Add</button>
      <Counter title="1st counter" count={count}/>
      <Counter title="2nd counter" count={count}/>
    </div>
  )
}

export default App
