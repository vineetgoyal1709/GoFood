import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      }
    );

    const json = await response.json();

    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);

      navigate("/");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px"
        }}
      >
        <div className="card-body p-4">
          <h1 className="text-center text-success fw-bold mb-2">
            🍔 GoFood
          </h1>

          <p
            className="text-center mb-4 fw-semibold"
            style={{ color: "#2c3e50" }}
          >
            Welcome Back
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 py-2 fw-bold"
            >
              Login
            </button>

            <div className="text-center mt-3">
              <span
                className="fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Don't have an account?
              </span>

              <Link
                to="/signup"
                className="text-success fw-bold text-decoration-none ms-2"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}