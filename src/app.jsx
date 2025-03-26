import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Discover from './discover/discover';
import Watchlist from './watchlist/watchlist';
import Profile from './profile/profile';
import {Login} from './login/login';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  const handleAuthChange = (userName, authState) => {
    setUserName(userName);
    setAuthState(authState);
    
    // Persist username in localStorage
    if (userName) {
      localStorage.setItem('userName', userName);
    } else {
      localStorage.removeItem('userName');
    }
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
                <menu className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Login
                    </NavLink>
                  </li>
                  {authState === AuthState.Authenticated && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/home">
                          Home
                        </NavLink>
                      </li>
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </menu>
              </div>
            </div>
          </nav>
        </header>

        <main className='container mt-5 pt-5'>
          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={handleAuthChange}
                />
              }
              exact
            />
            <Route 
              path='/home' 
              element={
                authState === AuthState.Authenticated ? <Home /> : <Login userName={userName} authState={authState} onAuthChange={handleAuthChange} />
              } 
            />
            <Route 
              path='/discover' 
              element={
                authState === AuthState.Authenticated ? <Discover /> : <Login userName={userName} authState={authState} onAuthChange={handleAuthChange} />
              } 
            />
            <Route 
              path='/watchlist' 
              element={
                authState === AuthState.Authenticated ? <Watchlist /> : <Login userName={userName} authState={authState} onAuthChange={handleAuthChange} />
              } 
            />
            <Route 
              path='/profile' 
              element={
                authState === AuthState.Authenticated ? <Profile /> : <Login userName={userName} authState={authState} onAuthChange={handleAuthChange} />
              } 
            />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Created by Davis Wollesen</span>
            <a className='text-reset' href='https://github.com/davis51502/projectstartup'>GitHub <i className="fab fa-github"></i></a>
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

function About() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>About Movie Ratings Hub</h1>
      <p>A platform to discover, rate, and track your favorite movies.</p>
    </main>
  );
}

export default App;