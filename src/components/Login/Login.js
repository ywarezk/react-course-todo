import { useState } from "react";


export function Login() {
    const [user, setUser] = useState(null)

    const handleSubmit = ( e ) => {
        // 
        console.log('this will run when submitting the form');
        e.preventDefault();

        setUser( { firstName: 'Yariv', lastName: 'Katz' } )
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