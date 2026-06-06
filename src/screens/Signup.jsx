import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle signup logic here
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.location
            })
        });

        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials");
        }

    }

    return (
        <>
            <div className='container'>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Address</label>
                        <input type="text" className="form-control" id="location" name='location' value={credentials.location} onChange={(e) => setCredentials({ ...credentials, location: e.target.value })} />
                    </div>

                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link className="m-3 btn btn-danger" to="/login">Already have an account? Login</Link>
                </form>

            </div>

        </>
    )
}
