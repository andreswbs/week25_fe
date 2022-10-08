import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({login}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const validate = () => {
        console.log(userName, password)
        login(userName, password)
        navigate('/registered_users')
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