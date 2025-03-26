import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './watchlist.css';

export default function Watchlist() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Fetch movies from the database
  const fetchMovies = async () => {
    try {
      const response = await fetch('/api/movies', {
        method: 'GET',
        credentials: 'include', // Include cookies for authentication
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a movie from the watchlist
  const deleteMovie = async (movieId) => {
    try {
      const response = await fetch(`/api/movies/${movieId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }
      setMovies(movies.filter((movie) => movie._id !== movieId));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className="mt-5">
      <section className="watchlist-section container py-5">
        <h2 className="mb-4">My Watchlist</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="row g-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie._id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={movie.poster || '/placeholder.jpg'}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text text-muted">
                      <i className="far fa-calendar-alt me-2"></i>Added: {new Date(movie.addedAt).toLocaleDateString()}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-primary">
                        <i className="fas fa-play me-2"></i>Watch Now
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteMovie(movie._id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Your watchlist is empty.</p>
          )}
        </div>
      </section>
    </main>
  );
}