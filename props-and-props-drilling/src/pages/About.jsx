import React from 'react'
import Button from '../component/Button'
import Common from '../component/Common'

function About() {
    let data = {
        title : 'Card 2',
        discription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi deserunt necessitatibus eligendi ad, voluptatibus vitae soluta ratione quis possimus perferendis eos perspiciatis minus aliquam'

    }
  return (
    <>
      <h1>About Us Page</h1>
      <Button name={'Login'}/>
      <Common myData={data} />
    </>
  )
}

export default About
