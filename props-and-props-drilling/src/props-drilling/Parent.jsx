import React from 'react'
import ChildA from './ChildA'

function Parent() {

  return (
    <div>
        <h1>Parent Component</h1>
        <ChildA firstName='Ajay' lastName='Sharma' />
    </div>
  )
}

export default Parent