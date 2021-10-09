import React, {useState} from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()

        const user = {
            email: username,
            password: password,
        }

        axios.post('http://localhost:3001/login', user)
        .then(res => {
            console.log(res.data)
            setLogin(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    if (login) {
        return <Redirect to="/rooms"/>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange= {e => setUsername(e.target.value)} placeholder="Enter Email"/>
            <input type="text" value={password} onChange= {e => setPassword(e.target.value)} placeholder="Enter Password"/>
            <input type="submit" value="LogIn"/>
        </form>
    )
}

export default withRouter(Login)