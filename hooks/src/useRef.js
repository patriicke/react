import React from "react";
import {useState,useEffect,useRef,useReducer} from "react";

function UseRef(){
    const [inputs,setInputs]=useState("");
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current + 1;
    })
    function FocusInputs(){
        const inputElement=useRef();
        const focusInput=()=>{
            inputElement.current.focus();
        }
        return(
            <div>
                <input type="text" ref={inputElement}/>
                <button onClick={focusInput}>Focus Input</button>
            </div>
        )

    }
    function PreviousInputValue(){
        const [inputValue,setInputValue]=useState("");
        const previousValue=useRef("");

        useEffect(()=>{
            previousValue.current=inputValue;
        },[inputValue])
        return(
            <div>
                 <input 
            type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousValue.current}</h2>
            </div>
        )
    }
      return(
        <div>
            <h4>This how we use the useRef Hook!</h4>
            <label>User Name: </label>
            <input type="text" value={inputs} onChange={(e)=>setInputs(e.target.value)}/>
            <h2>Count: {count.current}</h2>
            <FocusInputs />
            <PreviousInputValue />
            <hr></hr>
        </div>
    )

}
export default UseRef;