import "./App.css";
import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [item,setItem] = useState(10)
  return (
    <div className="App">
      <h1>Use Memo Hook In React</h1>
      <h2>count : {count}</h2>
      <h2>item : {item}</h2>
      <button onClick={()=>setCount(count+1)}>IncrementCount</button>
      <button onClick={()=>setItem(item+1)}>IncrementItem</button>
    </div>
  )
}

export default App
