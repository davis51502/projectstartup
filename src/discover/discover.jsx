import React from 'react';
export function Discover() {
    return (
        <main>
        <section class="discover-section container py-5">
            <h1 class="mb-4">Discover New Movies</h1>
            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for movies...">
                                <button class="btn btn-primary">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <select class="form-select" id="genre-filter">
                                <option value="">All Genres</option>
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                <option value="horror">Horror</option>
                                <option value="sci-fi">Sci-Fi</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <select class="form-select" id="year-filter">
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

        <section class="movie-ratings container">
            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h2 class="card-title mb-4">Top Rated Movies</h2>
                    <div class="list-group">
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <span class="badge bg-warning text-dark me-2">★ 4.9</span>
                                <span class="fw-bold">A Bug's Life</span>
                            </div>
                            <span class="text-muted">(2.4k votes)</span>
                        </div>
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <span class="badge bg-warning text-dark me-2">★ 4.8</span>
                                <span class="fw-bold">Star Wars: A New Hope</span>
                            </div>
                            <span class="text-muted">(2.1k votes)</span>
                        </div>
                        <div class="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <span class="badge bg-warning text-dark me-2">★ 4.7</span>
                                <span class="fw-bold">The Godfather</span>
                            </div>
                            <span class="text-muted">(1.9k votes)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="row g-4" id="movie-grid">
            </div>
        </section>
    </main>
    );
}

