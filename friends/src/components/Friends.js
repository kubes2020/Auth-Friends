import React, {useState, useEffect} from "react";
import { axiosWithAuth }from "./utils/axiosWithAuth";


export const Friends = () => {
    const [friends, setFriends] = useState([])
    console.log("friends", friends)
    useEffect(()=>{
        axiosWithAuth().get("/friends")
        .then((res)=>{
            console.log("yes friends", res.data)
            setFriends(...friends, res.data)
        })
        .catch((err) =>{
            console.log("erros getting friends", err)
        })
    }, [])

    return(
        <>
            <h2>Friends Page</h2>
            {friends.map(friend => (
                <h3>Name: {friend.name}, Age: {friend.age}, Id: {friend.id}</h3>
            ))
            }

        </>
    )
}

