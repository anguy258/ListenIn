import React from 'react'

export default function Register() {
    return (
        <form action="http://localhost:3001/register" method="POST">
            <input type="text" name="first_name" id="first_name" placeholder="First Name"/>
            <input type="text" name="last_name" id="last_name" placeholder="Last Name"/>
            <input type="text" name="email" id="email" placeholder="Enter Email"/>
            <input type="text" name="password" id="password" placeholder="Enter Password"/>
            <input type="submit" value="Register"/>
        </form>
    )
}
