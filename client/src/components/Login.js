import React from 'react'
import axios from 'axios'

export default function Login() {
    return (
        <form action="http://localhost:3001/login" method="POST">
            <input type="text" name="email" id="email" placeholder="Enter Email"/>
            <input type="text" name="password" id="password" placeholder="Enter Password"/>
            <input type="submit" value="LogIn"/>
        </form>
    )
}
