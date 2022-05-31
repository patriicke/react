import React from "react";
import {useState} from "react";
function DontUseProps({names}){
    const [name,setName]=useState(names);
    function updateName(){
        setName((previousName)=>{
            return {...previousName,fname: "Christian"}
          
        })
    }
    return(
        <div>
            {name.fname} {name.lname}
            <button type="button"  onClick={updateName}>Change Patrick to Christian</button>
        </div>
    )
}
export default DontUseProps;