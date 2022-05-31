import React from "react";
import {useNavigate } from "react-router-dom";

function About(){
    const navigate=useNavigate();
      return(
        <div>
            <div>This is the About page</div>
            
            <button onClick={()=>{
                return navigate("/");
            }}>Switch to home page</button>
       </div>
    )
}
export default About;
