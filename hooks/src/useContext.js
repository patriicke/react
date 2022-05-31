import React from "react";
import { useState,useContext,createContext } from "react";

function UseContext(){
    const UserContext=createContext();
    function Component1(){
        const [user,setUser]=useState("Patrick NDAYAMBAJE");
        return(
            <UserContext.Provider value={user}>
                <h1>Hi {user}!</h1>
                <Component2 value={user}/>
            </UserContext.Provider>
        )
    }
    function Component2(){
            return(
                <div>
                    <h1>Component2</h1>
                    <Component3 />
                </div>
            )
    }

    function Component3(){
        return(
            <div>
                <h1>Component3</h1>
                <Component4 />
            </div>
        )
    }

    function Component4(){
        return(
            <div>
                <h1>Component4</h1>
                <Component5 />
            </div>
        )
    }
    function Component5(){
        const user=useContext(UserContext)
        return(
            <div>
                <h1>Component5</h1>
                <h1>Hello {user} again</h1>
            </div>
        )
    }
    return(
        <div>
            {/* <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component5 /> */}
            <hr></hr>
        </div>
    )
}
export default UseContext;