import { useState } from "react";


/**
 * @returns [ handleSubmit, user]
 */
export function useLogin() {
    const [user, setUser] = useState(null);

    const handleSubmit = async (email, password) => {
        // call the server
        // setUser

        const response = await fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const userFromServer = await response.json();
        console.log(userFromServer);
        setUser(userFromServer);

    }

    return [
        handleSubmit, user
    ]

}