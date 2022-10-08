import { useEffect } from "react"

const Users = ({getUsers, users=[], token}) => {
    useEffect(() => { 
        console.log('Will get users')
        getUsers(token) 
    }, [token])
    console.log('Rendering users')
    
    return (
        <>
        <h1>Registered Users</h1>
        {users.map( (user, index) => {
            console.log(user)
            return (
                <div key={index}>
                    {user.username}
                </div>
            )
        } )}
        </>
    )
}

export default Users