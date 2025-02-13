import React from 'react';

export default function Profile() {
  return (
    <main class="container py-5">
        <div class="row">

            <div class="col-lg-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body text-center">
                        <div class="position-relative mb-4">
                            <img src="public/profilePicMan.jpeg" 
                                 class="rounded-circle img-thumbnail" 
                                 alt="Profile" 
                                 style="width: 150px; height: 150px; object-fit: cover;">
                            <button class="btn btn-sm btn-primary position-absolute bottom-0 end-0">
                                <i class="fas fa-camera"></i>
                            </button>
                        </div>
                        <h3 class="mb-3">Username</h3>
                        <p class="text-muted mb-4">
                            <i class="far fa-calendar-alt me-2"></i>Member since January 2025
                        </p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary">
                                <i class="fas fa-edit me-2"></i>Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="row g-3 mb-4">
                    <div class="col-sm-6 col-md-4">
                        <div class="card shadow-sm text-center h-100">
                            <div class="card-body">
                                <i class="fas fa-star text-warning mb-2" style="font-size: 24px;"></i>
                                <h5 class="card-title mb-0">Movies Rated</h5>
                                <p class="display-6 mb-0">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card shadow-sm text-center h-100">
                            <div class="card-body">
                                <i class="fas fa-list text-primary mb-2" style="font-size: 24px;"></i>
                                <h5 class="card-title mb-0">Watchlist</h5>
                                <p class="display-6 mb-0">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="card shadow-sm text-center h-100">
                            <div class="card-body">
                                <i class="fas fa-trophy text-success mb-2" style="font-size: 24px;"></i>
                                <h5 class="card-title mb-0">Achievements</h5>
                                <p class="display-6 mb-0">0</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card shadow-sm">
                    <div class="card-header bg-white">
                        <h4 class="mb-0">Recent Activity</h4>
                    </div>
                    <div class="card-body">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span class="badge bg-primary me-2">Just now</span>
                                        <span>Joined Movie Ratings Hub</span>
                                    </div>
                                    <small class="text-muted">Jan 2025</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="mt-5">
            <h4 class="mb-4">Favorite Movies</h4>
            <div class="row g-4">
                <div class="col-12 text-center text-muted">
                    <p>No favorite movies added yet.</p>
                    <a href="discover.html" class="btn btn-primary">
                        <i class="fas fa-search me-2"></i>Discover Movies
                    </a>
                </div>
            </div>
        </section>
    </main>
  );
}





