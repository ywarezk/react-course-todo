

export function Login() {
    // const [user, setUser] = useState(null)

    const handleSubmit = ( e ) => {
        // 
        console.log('this will run when submitting the form');
        e.preventDefault();

        // setUser( { firstName: 'yariv', lastName: 'katz' } )
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


        </form>
    )
}