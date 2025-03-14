import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Discover from './discover/discover';
import Watchlist from './watchlist/watchlist';
import Profile from './profile/profile';
import {Login} from './login/login';
import SignUp from './signup/SignUp';
import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = useState(currentAuthState);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setAuthState(AuthState.Authenticated);
    }
  }, []);

  const handleLogin = (user) => {
    setAuthState(AuthState.Authenticated);
    localStorage.setItem('isLoggedIn', true);
    setUserName(user.userName);
    localStorage.setItem("userName", user.userName);
  };

  const handleLogout = () => {
    setAuthState(AuthState.Unauthenticated);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setUserName("");
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleSignUp = (user) => {
    setAuthState(AuthState.Authenticated);
    localStorage.setItem('isLoggedIn', true);
    setUserName(user.userName);
    localStorage.setItem("userName", user.userName);
    setShowSignUp(false);
  };

  return (
    <div className="body bg-dark text-light">
      <BrowserRouter>
        <header className="bg-dark text-light">
          <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <div className="navbar-brand">
                <i className="fas fa-film"></i>
                <span>Movie Ratings Hub</span>
                <sup>&reg;</sup>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  {authState === AuthState.Authenticated && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/discover">
                          Discover
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/watchlist">
                          Watchlist
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">
                          Profile
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
                {authState === AuthState.Authenticated ? (
                  <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
                ) : null}
              </div>
            </div>
          </nav>
        </header>

        <main className='container mt-5 pt-5'>
          <Routes>
            <Route path='/' element={authState === AuthState.Authenticated ? <Home /> : (showSignUp ? <SignUp authState={authState} onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} authState={authState} onSignUpClick={handleSignUpClick} />)} />
            <Route path='/discover' element={authState === AuthState.Authenticated ? <Discover /> : (showSignUp ? <SignUp authState={authState} onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} authState={authState} onSignUpClick={handleSignUpClick} />)} />
            <Route path='/watchlist' element={authState === AuthState.Authenticated ? <Watchlist /> : (showSignUp ? <SignUp authState={authState} onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} authState={authState} onSignUpClick={handleSignUpClick} />)} />
            <Route path='/profile' element={authState === AuthState.Authenticated ? <Profile /> : (showSignUp ? <SignUp authState={authState} onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} authState={authState} onSignUpClick={handleSignUpClick} />)} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Created by Davis Wollesen</span>
            <a className='text-reset' href='https://github.com/davis51502/projectstartup'>GitHub <i className = "fab fa-github"></i></a>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      404: Return to sender. Address unknown.
    </main>
  );
}