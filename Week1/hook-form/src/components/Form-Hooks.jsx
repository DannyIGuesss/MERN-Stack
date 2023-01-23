import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log('Welcome', newUser);
        setFirstname("")
        setLastname('')
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" value= {firstName} onChange={(e) => setFirstname(e.target.value)}/>

                {
                    firstName.length < 3? 
                    <p>First Name has to be more than 2 characters</p>:
                    null
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastname(e.target.value)}/>

                {
                    lastName.length < 3? 
                    <p>First Name has to be more than 2 characters</p>:
                    null
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value= {email} onChange={(e) => setEmail(e.target.value)}/>

                {
                    email.length < 6?
                    <p>The field must be at least 5 characters</p>:
                    null
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value= {password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value= {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                {
                    confirmPassword !== password?
                    <p>Passwords have to match</p>:
                    null
                }
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
    </>
    
)
}

export default Form;