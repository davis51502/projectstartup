import React from 'react';

export default function Home() {
  return (
    <main>
      <section className="discover-section container py-5">
        <h1 className="mb-4">Discover Your Next Favorite Movie</h1>
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
        <div className="movie-grid row g-4">
          <span className="container text-center">Movies to be dynamically added here</span>
        </div>
      </section>
    </main>
  );
}