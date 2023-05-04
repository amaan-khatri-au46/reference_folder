import React from 'react'

const Users = (props) => {
  let sendIt = "Amaan Khatri"
  return (
    <div>
      <h1>Super Child Component</h1>
      <button onClick={()=>props.data(sendIt)}>Send It</button>
    </div>
  )
}

export default Users

