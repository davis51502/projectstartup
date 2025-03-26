import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Discover() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch popular movies from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=731742d20f056a3dd4063b57224a7951'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  // Search for movies based on user input
  const searchMovies = async (query) => {
    if (!query) {
      fetchMovies();
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=731742d20f056a3dd4063b57224a7951&query=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error('Failed to search movies');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  // Add a movie to the watchlist
  const addToWatchlist = async (movie) => {
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for authentication
        body: JSON.stringify({
          title: movie.title,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          addedAt: new Date().toISOString(),
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add movie to watchlist');
      }
      setSuccessMessage(`"${movie.title}" added to your watchlist!`);
      setTimeout(() => setSuccessMessage(''), 3000); // Clear the success message after 3 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchMovies(query);
  };

  return (
    <main>
      <section className="discover-section container py-5">
        <h1 className="mb-4">Discover New Movies</h1>
        {successMessage && <p className="text-success">{successMessage}</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <div className="row g-4" id="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="col-md-3">
                <div className="card h-100 shadow-sm">
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
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => addToWatchlist(movie)}
                    >
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No movies found.</p>
          )}
        </div>
      </section>
    </main>
  );
}