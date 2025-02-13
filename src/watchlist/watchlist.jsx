import React from 'react';

export default function Watchlist() {
  return (
    <main>
    <section class="watchlist-section container py-5">
        <h2 class="mb-4">My Watchlist</h2>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <img src="public/inception.jpeg" class="card-img-top" alt="Inception">
                    <div class="card-body">
                        <h5 class="card-title">Inception</h5>
                        <p class="card-text text-muted">
                            <i class="far fa-calendar-alt me-2"></i>Added: May 15, 2024
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary">
                                <i class="fas fa-play me-2"></i>Watch Now
                            </button>
                            <button class="btn btn-outline-danger">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <img src="src/images/darkKnight.jpeg" class="card-img-top" alt="The Dark Knight">
                    <div class="card-body">
                        <h5 class="card-title">The Dark Knight</h5>
                        <p class="card-text text-muted">
                            <i class="far fa-calendar-alt me-2"></i>Added: Jan 10, 2024
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary">
                                <i class="fas fa-play me-2"></i>Watch Now
                            </button>
                            <button class="btn btn-outline-danger">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="realtime-updates container mb-5">
        <div class="card shadow-sm">
            <div class="card-body">
                <h2 class="card-title mb-4">Recent Activity</h2>
                <div class="list-group">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-primary me-2">3 min ago</span>
                            <span>Davey rated Interstellar ★★★★★</span>
                        </div>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-primary me-2">2 min ago</span>
                            <span>Mike added Oppenheimer to watchlist</span>
                        </div>
                    </div>
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-primary me-2">5 min ago</span>
                            <span>Josh rated Barbie ★★★★</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  );
}


