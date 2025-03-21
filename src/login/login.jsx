import React, { useEffect } from "react";
import { Unauthenticated } from "./unauthenticated";
import { Authenticated } from "./authenticated";
import { AuthState } from "./authState";

export function Login({ userName, authState, onAuthChange, onSignUpClick }) {
  React.useEffect(() => {
    console.log(authState);
  }, []);
  return (
    <main className="container-fluid bg-dark text-center text-light">
      <div className="center-group">
        {authState !== AuthState.Unknown && (
          <div
            className="card custom-card mb-3 w-100"
            style={{ maxWidth: "30rem" }}
          >
            <div className="card-body">
              <h5 className="card-title fs-1">
                Welcome! Please log in to continue.
              </h5>
            </div>
          </div>
        )}
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            onSignUpClick={onSignUpClick}
          />
        )}
      </div>
    </main>
  );
}