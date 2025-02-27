import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import movieQuote from 'popular-movie-quotes';
import './home.css';

export default function Home() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch some random quotes
    const fetchedQuotes = movieQuote.getSomeRandom(10);
    setQuotes(fetchedQuotes);
  }, []);

  return (
    <main>
      <section className="discover-section container py-5">
        <h1 className="mb-4">Discover Your Next Favorite Movie</h1>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-2">
              <div className="col-12">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for movies..." />
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <select className="form-select" id="genre-filter">
                  <option value="">All Genres</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                  <option value="sci-fi">Sci-Fi</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
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
        <div className="movie-grid row g-4">
          {quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <div key={index} className="col-md-10">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{quote.movie}</h5>
                    <p className="card-text">"{quote.quote}"</p>
                    <p className="card-text"><small className="text-muted">{quote.year}</small></p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span className="container text-center">Movies to be dynamically added here</span>
          )}
        </div>
      </section>
    </main>
  );
}