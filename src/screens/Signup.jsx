import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location
        })
      }
    );

    const json = await response.json();

    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      alert("Account created successfully");
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "450px",
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
            Create Your Account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={credentials.name}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    name: e.target.value
                  })
                }
              />
            </div>

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
                placeholder="Enter your email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                value={credentials.location}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    location: e.target.value
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
                placeholder="Create a password"
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
              Create Account
            </button>

            <div className="text-center mt-3">
              <span
                className="fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Already have an account?
              </span>

              <Link
                to="/login"
                className="text-success fw-bold text-decoration-none ms-2"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
