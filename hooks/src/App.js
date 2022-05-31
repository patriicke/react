import React from "react";
import UseState from "./useState";
import UseEffect from "./useEffect";
import UseContext from "./useContext";
import UseRef from "./useRef";
import Todos from "./todo";

function DisplayEffect(){
    return(
        <div>
            <UseState />
            <UseEffect />
            <UseContext />
            <UseRef />
            <Todos />
        </div>
    )
}
export default DisplayEffect;