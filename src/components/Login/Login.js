import { useState } from "react";


export function Login() {
    const [user, setUser] = useState(null)

    // state var to contain form values
    const [ formValues, setFormValues ] = useState({
        email: '',
        password: ''
    })

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
                email: formValues.email,
                password: formValues.password
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

    /**
     * update the state with the new email
     * @param {*} e 
     */
    /*
    const handleEmailChange = ( e ) => {
        // {email: '', password: ''}
        setFormValues({
            // email and password from the old object
            ...formValues,
            // override the email with the new value
            email: e.target.value
        })
    }

    const handlePasswordChange = ( e ) => {
        // {email: '', password: ''}
        setFormValues({
            ...formValues,
            password: e.target.value
        })
    }
    */

    /**
     * @params key email/password
     * 
     */
    /*
    handleChange = (key, value) => {        
        // formValues[key] = value
        setFormValues({
            ...formValues,
            [key]: value
            // ...(key === 'email' ? {email: value} : {password: value})
            // key === 'email' ? 
        })
    }
    */

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                value={formValues.email}
                onChange={ handleChange }
                
                
                // onChange={ (e) => setFormValues({
                //     ...formValues,
                //     email: e.target.value
                // }) }
                type="email"
                name="email"
                placeholder="Enter your email"
            />
            <input 
                value={formValues.password}
                type="password"
                name="password"
                onChange={ handleChange }
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