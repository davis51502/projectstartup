import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import movieQuote from 'popular-movie-quotes';
import './home.css';
import {Link} from 'react-router-dom';

export default function Home() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch some random quotes
    const fetchedQuotes = movieQuote.getSomeRandom(8);
    setQuotes(fetchedQuotes);
  }, []);

  return (
    <main>
      <section className="discover-section container py-5">
        <h1 className="mb-4">Discover Your Next Favorite Movie</h1>
        <div className="text-center mb-4">
        <Link to="/discover" className="btn btn-primary">
    Discover Now!
  </Link>
        </div>
        <div className="card shadow-sm mb-4"></div>
        <div className="movie-grid row g">
          {quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <div key={`${quote.movie}-${index}`} className="col-md-10">
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