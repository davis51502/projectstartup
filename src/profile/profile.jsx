import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    // Establish WebSocket connection
    ws.current = new WebSocket('ws://localhost:4000/ws');

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    ws.current.onclose = () => console.log('WebSocket disconnected');

    return () => ws.current.close();
  }, []);

    setUsername(userData.username);
    setMemberSince(userData.memberSince);
    setMoviesRated(userData.moviesRated);
    setWatchlistCount(userData.watchlistCount);
    setAchievements(userData.achievements);
  }, []);

  return (
    <main className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <div className="position-relative mb-4">
                <img
                  src="/profilePicMan.jpeg"
                  className="rounded-circle img-thumbnail"
                  alt="Profile"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <button className="btn btn-sm btn-primary position-absolute bottom-0 end-0">
                  <i className="fas fa-camera"></i>
                </button>
              </div>
              <h3 className="mb-3">{username}</h3>
              <p className="text-muted mb-4">
                <i className="far fa-calendar-alt me-2"></i>Member since {memberSince}
              </p>
              <div className="d-grid gap-2">
                <button className="btn btn-primary">
                  <i className="fas fa-edit me-2"></i>Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row g-3 mb-4">
            <div className="col-sm-6 col-md-4">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="fas fa-star text-warning mb-2" style={{ fontSize: '24px' }}></i>
                  <h5 className="card-title mb-0">Movies Rated</h5>
                  <p className="display-6 mb-0">{moviesRated}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="fas fa-list text-primary mb-2" style={{ fontSize: '24px' }}></i>
                  <h5 className="card-title mb-0">Watchlist</h5>
                  <p className="display-6 mb-0">{watchlistCount}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="fas fa-trophy text-success mb-2" style={{ fontSize: '24px' }}></i>
                  <h5 className="card-title mb-0">Achievements</h5>
                  <p className="display-6 mb-0">{achievements}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h4 className="mb-0">Recent Activity</h4>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="badge bg-primary me-2">Just now</span>
                      <span>Joined Movie Ratings Hub</span>
                    </div>
                    <small className="text-muted">Jan 2025</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <h4 className="mb-4">Favorite Movies</h4>
        <div className="row g-4">
          <div className="col-12 text-center text-muted">
            <p>No favorite movies added yet.</p>
            <div className="d-grid gap-2">
            <Link to="/discover" className="btn btn-primary"><i className="fas fa-search me-2"></i>
    Discover Movies!
  </Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}