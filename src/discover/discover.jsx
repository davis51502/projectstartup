import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Discover() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Fetch movies from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=731742d20f056a3dd4063b57224a7951"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data.results); // Use the `results` array from the API response
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <section className="discover-section container py-5">
        <h1 className="mb-4">Discover New Movies</h1>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for movies..."
                  />
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
          
        </div>
      </section>

      <section className="container mb-5">
        <div className="row g-4" id="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-3">
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    Rating: {movie.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}