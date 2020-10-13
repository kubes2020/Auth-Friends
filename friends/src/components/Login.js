import React, { useState } from "react";
import axios from "axios";


export const Login = () => {
    const [formState, setFormState] = useState({
        credentials: {
            username: "",
            password: "",
        }
    })

    const handleChange = (e) =>{
        e.persist()
        setFormState({...credentials, [e.target.name]: e.target.value})
    }

    const login = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", credentials)
        .then((res) =>{
            console.log("res from login", res)
        })
        .catch((err) =>{
            console.log("error with login", err)
        })
    }


    return(
        <>
        <h1>Test Login.js</h1>
        <form onSubmit={login}>
            <label forHtml="username">Username:
            <input 
            name="username" 
            id="username" 
            onChange={handleChange} 
            value={formState.credentials.username}
            ></input>
            </label>
        </form>
        <form>
            <label forHtml="password">Password:
            <input 
            name="password" 
            id="password" 
            onChange={handleChange} 
            value={formState.credentials.password}
            ></input>
            </label>
        </form>

        </>
    )
}

