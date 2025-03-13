import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function Unauthenticated({ onLogin, onSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    onLogin(email);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "2rem" }}>
        Login to play and be put on the leaderboard!
      </h2>
      <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
        <div className="input-group mb-3 w-75 mx-auto">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="movieratings.click"
          />
        </div>
        <div className="input-group mb-3 w-75 mx-auto">
          <span className="input-group-text">🔒</span>
          <input
            className={`form-control ${displayError ? "input-error" : ""}`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="dont use password1"
          />
        </div>

        {displayError && <p className="error-msg">{displayError}</p>}

        <Button
          variant="btn custom-button me-2"
          type="submit"
          disabled={!email || !password}
        >
          Login
        </Button>
        <Button
          variant="btn btn-secondary"
          onClick={onSignUpClick}
          disabled={!email || !password}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}