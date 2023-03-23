import React from 'react'
import Childc from './Childc'

function ChildB({firstName, lastName}) {
  return (
    <div>
        <h1>Child B Component</h1>
        <Childc firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default ChildB