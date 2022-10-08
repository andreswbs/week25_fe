import React, {useState} from 'react'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const validate = () => {
        console.log(userName, password)
    }

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text"
                value={userName}  
                placeholder="username" 
                onChange={({target}) => setUserName(target.value)}
            />
            <input 
                type="password"
                value={password}  
                placeholder="Password" 
                onChange={({target}) => setPassword(target.value)}
            />
            <button onClick={validate} >Log in</button>
        </div>
    )
}

export default Login