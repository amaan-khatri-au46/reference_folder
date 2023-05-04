import "./App.css";
import React, { useEffect } from 'react'

const User = (props) => {
  useEffect(()=>{
    console.log("Use Effect Called")
  },[props.data])
  return (
    <div>
     <h1>{props.data}</h1>
    </div>
  )
}

export default User



