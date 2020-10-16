import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

export const CreateFriend = () => {
    const [newFriend, setNewFriend] = useState({
        id: new Date(),
        age: "",
        name: "",
        email: "",
    })

    const handleChange = (e) =>{
        setNewFriend(
            {...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("handleSubmit", newFriend)
        axiosWithAuth().post("/friends", newFriend)
        .then((res) => {
            console.log("successful post", res)
        })
        .catch((err) => {
            console.log("error with post", err)
        })

    }

    return(
        <>
        <h1>Create Friend</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
            <input
            name="name"
            id="name"
            onChange={handleChange}
            value={newFriend.name}
            ></input>
            </label>
            <label htmlFor="age">Age:
            <input
            name="age"
            id="age"
            onChange={handleChange}
            value={newFriend.age}
            ></input>
            </label>
            <label htmlFor="email">Email:
            <input
            name="email"
            id="email"
            onChange={handleChange}
            value={newFriend.email}
            ></input>
            </label>
            <button>Submit</button>

        </form>


        </>
    )
}