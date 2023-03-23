import React from 'react'

function Common(props) {
    const {myData} = props
    const {title, discription} = myData
    console.log(props)
  return (
    <div>
      <h1>{title}</h1>
      <p>{discription}</p>
    </div>
  )
}

export default Common;
