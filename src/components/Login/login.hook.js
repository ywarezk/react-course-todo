import { useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * @returns [ handleSubmit, user]
 */
export function useLogin() {
    const [user, setUser] = useState(null);
    const navi = useNavigate();

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
        if (response.status === 401) {
            setUser(null);    
        } else {
            const userFromServer = await response.json();
            console.log(userFromServer);
            setUser(userFromServer);
            
            navi('/todo');
        }
    }

    return [
        handleSubmit, user
    ]

}