import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Discover from './discover/discover';
import Watchlist from './watchlist/watchlist';
import Profile from './profile/profile';
import Login from './login/Login';
import SignUp from './signup/SignUp';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };
  const handleSignUpClick = () => {
    setShowSignUp(true);
  };
  const handleSignUp = (User) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    setShowSignUp(false);
  };

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
            <div className='container'>
              <div className='navbar-brand'>
                <i className="fas fa-film"></i>
                <span>Movie Ratings Hub</span>
                <sup>&reg;</sup>
              </div>

              <div className="dropdown d-lg-none">
                <button 
                  className="btn btn-secondary dropdown-toggle" 
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li><NavLink className="dropdown-item" to="/">Home</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/discover">Discover</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/watchlist">Watchlist</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                </ul>
              </div>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/discover">Discover</NavLink></li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink></li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                </ul>
                {isLoggedIn ? (
                  <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
                ) : (
                  <form className="d-flex login-form" onSubmit={handleLogin}>
                    <input 
                      className="form-control me-2" 
                      type="text" 
                      placeholder="Username" 
                      required
                    />
                    <input 
                      className="form-control me-2" 
                      type="password" 
                      placeholder="Password" 
                      required
                    />
                    <button className="btn btn-light me-2" type="submit">Login</button>
                    <button className="btn btn-outline-light" type="button" onClick={handleLogin}>Sign Up</button>
                  </form>
                )}
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={isLoggedIn ? <Home /> : (showSignUp ? <SignUp onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} />)} />
          <Route path='/discover' element={isLoggedIn ? <Discover /> : (showSignUp ? <SignUp onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} />)} />
          <Route path='/watchlist' element={isLoggedIn ? <Watchlist /> : (showSignUp ? <SignUp onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} />)} />
          <Route path='/profile' element={isLoggedIn ? <Profile /> : (showSignUp ? <SignUp onSignUp={handleSignUp} /> : <Login onLogin={handleLogin} />)} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Created by Davis Wollesen</span>
            <a className='text-reset' href='https://github.com/davis51502/projectstartup'>GitHub <i className = "fab fa-github"></i></a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      404: Return to sender. Address unknown.
    </main>
  );
}