import React from "react";
import { Unauthenticated } from "./unauthenticated";
import { Authenticated } from "./authenticated";
import { AuthState } from "./authState";


export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-dark text-center text-light'>
      <div className="center-group">
        {authState !== AuthState.Unknown && <h5 className="card-title fs-1">Welcome, Please Log in!</h5>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}