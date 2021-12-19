import { useState } from "react";


export function Login() {
    const [user, setUser] = useState(null)

    const handleSubmit = async ( e ) => {
        // 
        console.log('this will run when submitting the form');
        e.preventDefault();
        const response = await fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'yariv@nerdeez.com',
                password: '12345678'
            })
        })
        const userFromServer = await response.json();
        console.log(userFromServer);
        setUser(userFromServer);
        /*
        const responsePromise = fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'yariv@nerdeez.com',
                password: '12345678'
            })
        });
        responsePromise
            .then((response) => {
                // const dataPromise = response.json()
                // dataPromise.then((data) => {
                //     console.log(data);
                // })
                return response.json();
            })
            .then((data) => {
                console.log(data)
            })

        setUser( { firstName: 'Yariv', lastName: 'Katz' } )
        */
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="email"
                name="email"
                placeholder="Enter your email"
            />
            <input 
                type="password"
                name="password"
                placeholder="Enter your password"
            />

            <button type="submit">Login</button>

            {/* hello yariv you are now logged in  */}

            {
                user && <h1>Hello {user.firstName} you are now logged in</h1>
            }
        </form>
    )
}