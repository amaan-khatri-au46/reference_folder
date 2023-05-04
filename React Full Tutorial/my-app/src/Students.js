import React, { Component } from 'react'

export default class Students extends Component {
    componentWillUnmount(){
        alert("Component Will Unmount")
    }
  render() {
    return (
      <div>
         <h1>Student Components!</h1> 
      </div>
    )
  }
}
