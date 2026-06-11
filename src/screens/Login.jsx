import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
    // Handle signup logic here
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        email: credentials.email,
        password: credentials.password

      })
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      console.log("credentials.email:", credentials.email);

      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);

      console.log("Stored userEmail in localStorage:", localStorage.getItem("userEmail"));
      navigate("/");
    }

  }


  return (
    <>
      <div className='container'>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
          </div>


          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link className="m-3 btn btn-danger" to="/signup">Don't have an account? Signup</Link>
        </form>

      </div>


    </>
  )
}
