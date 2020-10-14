import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "./utils/axiosWithAuth";


export const FindFriend = () => {
    const [findFriend, setFindFriend] = useState()
    const [myFriend, setMyFriend] = useState({
        name: "",
        age: "",
        id: "",
        email: "",
    })

    const handleChange = (e) => {
        setFindFriend(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().get(`/friends/${findFriend}`)
        .then((res)=>{
            console.log("yes one friend", res.data)
            setMyFriend(res.data)
            // setFindFriend("")
        })
        .catch((err) =>{
            console.log("erros getting one friend", err)
        })
    }
    console.log("myFriend!", myFriend)

    return(
        <>
        <h1>Find Friend</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="findFriend">Find Friend With Id#
            <input
            type="text"
            name="findFriend"
            onChange={handleChange}
            value={findFriend}
            ></input>
            </label>
            <button>Submit</button>
        </form>
        {findFriend ? 
        <h2>Name:{myFriend.name} Age:{myFriend.age} Id:{myFriend.id}</h2> : null
        }
        </>
    )
}