import React from "react";
import {useParams} from "react-router-dom";

function Profile(){
    let {username} = useParams();
    if(username!==undefined){
        return(
        
            <div>
                This is the profile page for the user called <strong><i>{username}</i></strong>
            </div>
        )
    }else{
        return(
            <div>
                This is the profile page
            </div>
        )
    }
}
export default Profile