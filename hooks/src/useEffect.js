import React from "react";
import { useState,useEffect } from "react";

// function UseEffect(){
    // const [count,setCount]=useState(0);
    // useEffect(()=>{
    //     setTimeout(() => {
    //        setCount((count)=>count+1) 
    //     }, 1000);
    // },[])
    // return(
    //     <h1>I have rendered {count} times!</h1>
    // )
    // const [count,setCount]=useState(0);
    // const [calculation,setCalculation]=useState(0);

    // useEffect(()=>{
    //     setCalculation(()=>(count * 2))
    // },[count])
    // return(
    //     <div>
    //         <p>Count: {count}</p>
    //         <button type="button" onClick={()=>setCount(count+1)}>+</button>
    //         <p>Calculation: {calculation}</p>
    //     </div>
        
    // )
    function UseEffect() {
        const [count, setCount] = useState(0);
        const [manager,setManager]=useState(1);
      
        useEffect(() => {
          let timer = setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      
        return () => clearTimeout(timer)
        },[manager]);
      
        return <div>
                    <h1>I've rendered {count} times!</h1>
                    <h1>The state for manager is {manager}</h1>
                    <button onClick={()=>{
                      setManager(()=>manager+1)
                    }}>Increment manager</button>
                    <hr></hr>

              </div>
}
export default UseEffect;