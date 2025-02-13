import React from 'react';

export default function Home() {
  return (
    <main>
        <section class="discover-section container py-5">
            <h1 class="mb-4">Discover Your Next Favorite Movie</h1>
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
            <div class="movie-grid row g-4">
                 <span class="container text-center">Movies to be dynamically added here</span>
            </div>
        </section>
    </main>
  );
}


