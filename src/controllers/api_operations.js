const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:3030'

export const validateUser = async (username, password) => {
    const response = await fetch( API_ENDPOINT + '/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })

    const result = await response.json()
    console.log(result.token)
    return result?.token
}

export const getRegisteredUsers = async (token) => {
    const response = await fetch( API_ENDPOINT + '/api/registered_users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })

    const result = await response.json()
    console.log(result)
    return result
}