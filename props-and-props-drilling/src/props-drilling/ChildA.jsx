import React from 'react'
import ChildB from './ChildB'

function ChildA({firstName, lastName}) {
  return (
    <div>
        <h1>Child A Component</h1>
        <ChildB firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default ChildA