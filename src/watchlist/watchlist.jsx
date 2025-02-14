import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Watchlist() {
  return (
    <main>
      <section className="watchlist-section container py-5">
        <h2 className="mb-4">My Watchlist</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/inception.jpeg" className="card-img-top" alt="Inception" />
              <div className="card-body">
                <h5 className="card-title">Inception</h5>
                <p className="card-text text-muted">
                  <i className="far fa-calendar-alt me-2"></i>Added: May 15, 2024
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">
                    <i className="fas fa-play me-2"></i>Watch Now
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/darkKnight.jpeg" className="card-img-top" alt="The Dark Knight" />
              <div className="card-body">
                <h5 className="card-title">The Dark Knight</h5>
                <p className="card-text text-muted">
                  <i className="far fa-calendar-alt me-2"></i>Added: Jan 10, 2024
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">
                    <i className="fas fa-play me-2"></i>Watch Now
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="realtime-updates container mb-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-4">Recent Activity</h2>
            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-primary me-2">3 min ago</span>
                  <span>Davey rated Interstellar ★★★★★</span>
                </div>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-primary me-2">2 min ago</span>
                  <span>Mike added Oppenheimer to watchlist</span>
                </div>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-primary me-2">5 min ago</span>
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