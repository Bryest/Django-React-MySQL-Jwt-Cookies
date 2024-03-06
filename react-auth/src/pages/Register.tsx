import React, { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const Submit = async (e: SyntheticEvent) => {

        // To prevent the page refresh
        e.preventDefault();

        await fetch('http://localhost:8000/api/register',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login"/>
    }

    return (
        <form onSubmit={Submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <div className="form-floating">
                <input type="Name" className="form-control" placeholder="Name" required autoFocus
                    onChange={e => setName(e.target.value)} />
                <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com" required autoFocus
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>

    )
}

export default Register