import React from 'react'
import Button from '../component/Button'
import Common from '../component/Common'
import Mona from '../images/a.jpeg'

function Home() {
    let btnName = 'SignUp'
    let data = {
        title : 'Card 1',
        discription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi deserunt necessitatibus eligendi ad, voluptatibus vitae soluta ratione quis possimus perferendis eos perspiciatis minus aliquam'

    }
  return (
    <>
      <h1>Home Page</h1>
      <Button name={btnName}  />
      <Common myData ={data}  />
      <img src={Mona} />
    </>
  )
}

export default Home
