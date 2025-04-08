import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// WebSocket client class (same logic as your working example)
class ChatClient {
  observers = [];
  connected = false;

  constructor() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    this.socket.onopen = () => {
      this.notifyObservers('system', 'websocket', 'connected');
      this.connected = true;
    };

    this.socket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      this.notifyObservers('received', chat.name, chat.msg);
    };

    this.socket.onclose = () => {
      this.notifyObservers('system', 'websocket', 'disconnected');
      this.connected = false;
    };
  }

  sendMessage(name, msg) {
    this.notifyObservers('sent', 'me', msg);
    this.socket.send(JSON.stringify({ name, msg }));
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(event, from, msg) {
    this.observers.forEach((h) => h({ event, from, msg }));
  }
}

export default function Profile() {
  const [username, setUsername] = useState('MovieBuff42');
  const [memberSince] = useState('March 2023');
  const [moviesRated] = useState(87);
  const [watchlistCount] = useState(12);
  const [achievements] = useState(5);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatClient] = useState(() => new ChatClient());

  useEffect(() => {
    chatClient.addObserver((chat) => {
      setMessages((prev) => [...prev, chat]);
    });
  }, [chatClient]);

  const sendMsg = () => {
    if (message.trim() && chatClient.connected) {
      chatClient.sendMessage(username, message);
      setMessage('');
    }
  };

  return (
    <main className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
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
              <button className="btn btn-primary">
                <i className="fas fa-edit me-2"></i>Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row g-3 mb-4">
            <StatCard icon="star" title="Movies Rated" value={moviesRated} color="text-warning" />
            <StatCard icon="list" title="Watchlist" value={watchlistCount} color="text-primary" />
            <StatCard icon="trophy" title="Achievements" value={achievements} color="text-success" />
          </div>

          {/* WebSocket Chat Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h4 className="mb-0">Community Chat</h4>
            </div>
            <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {messages.length > 0 ? (
                messages.map((chat, idx) => (
                  <div key={idx} className="mb-1">
                    <strong className={chat.event}>{chat.from}</strong>: {chat.msg}
                  </div>
                ))
              ) : (
                <p className="text-muted">No messages yet. Say hi!</p>
              )}
            </div>
            <div className="card-footer d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
                disabled={!chatClient.connected}
              />
              <button className="btn btn-primary" onClick={sendMsg} disabled={!chatClient.connected || !message}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <h4 className="mb-4">Favorite Movies</h4>
        <div className="row g-4">
          <div className="col-12 text-center text-muted">
            <p>No favorite movies added yet.</p>
            <Link to="/discover" className="btn btn-primary">
              <i className="fas fa-search me-2"></i>
              Discover Movies!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card shadow-sm text-center h-100">
        <div className="card-body">
          <i className={`fas fa-${icon} ${color} mb-2`} style={{ fontSize: '24px' }}></i>
          <h5 className="card-title mb-0">{title}</h5>
          <p className="display-6 mb-0">{value}</p>
        </div>
      </div>
    </div>
  );
}
