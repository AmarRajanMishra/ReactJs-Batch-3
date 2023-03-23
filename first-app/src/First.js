// import { Fragment } from "react";
import pic from './images/download.png'




function First(){
    let myName = 'Sachin'
    let obj = {
        Name : 'Ajay',
        Age : 24,
        Gender : 'Male'
    }
    console.log('Hello')
    return(
        <>
            <h1 className="heading">My First Component {obj.Name}</h1>
            <h2 style={{color : 'green'}}>My Name is : {myName}</h2>
            <img src={pic} />
            <h2>Age : {obj.Age}</h2>
        </>
    )
}

export default First;

const CompA = () => {
    return(
        <h1>Component A</h1>
    )
}

const CompC = () => {
    return(
        <h1>Component c</h1>
    )
}
const CompD = () => {
    return(
        <h1>Component D</h1>
    )
}

export {CompA, CompC, CompD}