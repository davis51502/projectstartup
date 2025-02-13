// filepath: /Users/daviswollesen/Desktop/cs260/projectstartup/src/discover/discover.jsx

import React from 'react';

export default function Discover() {
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
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-warning text-dark me-2">★ 4.9</span>
                  <span className="fw-bold">A Bug's Life</span>
                </div>
                <span className="text-muted">(2.4k votes)</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-warning text-dark me-2">★ 4.8</span>
                  <span className="fw-bold">Star Wars: A New Hope</span>
                </div>
                <span className="text-muted">(2.1k votes)</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-warning text-dark me-2">★ 4.7</span>
                  <span className="fw-bold">The Godfather</span>
                </div>
                <span className="text-muted">(1.9k votes)</span>
              </div>
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