import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Discover() {
  const [movies, setMovies] = useState([
    { title: "A bugs life", rating: 4.9, votes: 2400 },
    { title: "Star Wars: A New Hope", rating: 4.8, votes: 2100 },
    { title: "The Godfather", rating: 4.7, votes: 1900 }
  ]); 
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const newMovies = [...movies]; 
      newMovies[randomIndex].votes += 1; 
      setMovies(newMovies);} , 5000); 
      return () => clearInterval(interval);
    }, [movies]); 
  return (
    <main>
      <section className="discover-section container py-5">
        <h1 className="mb-4">Discover New Movies</h1>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for movies..." />
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <select className="form-select" id="genre-filter">
                  <option value="">All Genres</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                  <option value="sci-fi">Sci-Fi</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-select" id="year-filter">
                  <option value="">All Years</option>
                  <option value="2020-2025">2020's</option>
                  <option value="2010-2019">2010's</option>
                  <option value="2000-2009">2000's</option>
                  <option value="1990-1999">1990's</option>
                  <option value="1980-1989">1980's</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="movie-ratings container">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h2 className="card-title mb-4">Top Rated Movies</h2>
            <div className="list-group">
              {movies.map((movie, index) => (
              <div key ={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-warning text-dark me-2">★ 4.9</span>
                  <span className="fw-bold">{movie.title}</span>
                </div>
                <span className="text-muted">({movie.votes} votes)</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <div className="row g-4" id="movie-grid"></div>
      </section>
    </main>
  );
}