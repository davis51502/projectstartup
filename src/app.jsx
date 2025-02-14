import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Discover from './discover/discover';
import Watchlist from './watchlist/watchlist';
import Profile from './profile/profile';

export default function App() {

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
                    <NavLink className="nav-link" to="/discover">Discover</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                </ul>

                <form className="d-flex login-form">

                  <button className="btn btn-light me-2" type="submit">Login</button>
                  <button className="btn btn-outline-light" type="button">Create</button>
                </form>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/davis51502/projectstartup'>Source</a>
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