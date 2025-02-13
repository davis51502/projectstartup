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
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Movie Ratings Hub<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/discover'>
                  Discover
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/watchlist'>
                  Watchlist
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/profile'>
                  Profile
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/discover' element={<Discover />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/davis51502/projectstartup'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

// the * (default matcher) was added to handle the case where an 
// unknown path is requested
function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>
    404: Return to sender. Address unknown.</main>;
}