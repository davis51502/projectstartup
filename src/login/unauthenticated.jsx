import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function Unauthenticated({ onLogin, onSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform login logic here, passing both email and password
      await onLogin({ email, password });
      // If successful, clear error message
      setDisplayError(null);
    } catch (error) {
      // Handle login error
      setDisplayError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "2rem" }}>
        Login to rate your first movie!
      </h2>
      <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
        <div className="input-group mb-3 w-75 mx-auto">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="input-group mb-3 w-75 mx-auto">
          <span className="input-group-text">🔒</span>
          <input
            className={`form-control ${displayError ? "input-error" : ""}`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        {displayError && <p className="error-msg">{displayError}</p>}

        <Button
          variant="primary"
          type="submit"
          disabled={!email || !password}
        >
          Login
        </Button>
        <Button
          variant="secondary"
          onClick={onSignUpClick}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
