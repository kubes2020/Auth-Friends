import React, { useState } from "react";
import axios from "axios";


export const Login = (props) => {
    
    const [credentials, setCredentials] = useState({
            username: "",
            password: "",
    })

    const handleChange = (e) =>{
        e.persist()
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const login = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", credentials)
        .then((res) =>{
            console.log("res from login", res)
            window.localStorage.setItem('token')
            props.history.push("/protected")
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
            type="text"
            onChange={handleChange} 
            value={credentials.username}
            ></input>
            </label>
        </form>
        <form>
            <label forHtml="password">Password:
            <input 
            name="password" 
            id="password" 
            type="password"
            onChange={handleChange} 
            value={credentials.password}
            ></input>
            </label>
            <button>Log In</button>
        </form>

        </>
    )
}

