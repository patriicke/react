import React from "react";
import {useState} from "react";

function UseState(){
  const [person,setPerson]=useState({
    name:"Patrick",
    color:"green",
    age:20
  })
  const updateAge=()=>{
    setPerson((previousState)=>{
      return{...previousState,age:30};
    })
  }
  const revertAge=()=>{
    setPerson((previousState)=>{
      return {...previousState,age:20}
    })
  }
   return(
    <div>
      <span>{`I am ${person.name} and I am ${person.age} years old. My favourite color is ${person.color}`}</span>
      <button type="button" onClick={updateAge}> CHANGE MY AGE</button>
      <button type="button" onClick={revertAge}> REVERT MY AGE</button>
      <hr></hr>
    </div>
  )
}
export default UseState;