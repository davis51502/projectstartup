import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// WebSocket client class
class ChatClient {
  observers = [];
  connected = false;

  constructor() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    this.socket.onopen = () => {
      this.notifyObservers('system', 'System', 'Connected to chat');
      this.connected = true;
    };

    this.socket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      this.notifyObservers('received', chat.name, chat.msg);
    };

    this.socket.onclose = () => {
      this.notifyObservers('system', 'System', 'Disconnected from chat');
      this.connected = false;
    };
  }

  sendMessage(name, msg) {
    this.notifyObservers('sent', 'Me', msg);
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
  const [activeUsers] = useState(['FilmFan88', 'DirectorsCut', 'SciFiLover']);
  const [chatExpanded, setChatExpanded] = useState(true);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatClient.addObserver((chat) => {
      setMessages((prev) => [...prev, chat]);
    });
    
    // Add some initial messages for demonstration
    setTimeout(() => {
      chatClient.notifyObservers('received', 'FilmFan88', 'Has anyone seen the new Marvel movie?');
      chatClient.notifyObservers('received', 'DirectorsCut', 'The cinematography was amazing!');
    }, 1000);
  }, [chatClient]);

  useEffect(() => {
    // Scroll to the bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMsg = () => {
    if (message.trim() && chatClient.connected) {
      chatClient.sendMessage(username, message);
      setMessage('');
    }
  };

  const toggleChatSize = () => {
    setChatExpanded(!chatExpanded);
  };

  return (
    <main className="container-fluid py-3">
      <div className="row">
        {/* Chat as the main feature - now takes up more space */}
        <div className={`${chatExpanded ? 'col-lg-9' : 'col-lg-6'} order-lg-2`}>
          <div className="card shadow mb-4">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Community Chat</h3>
              <div>
                <button 
                  className="btn btn-sm btn-light me-2" 
                  onClick={toggleChatSize}
                  title={chatExpanded ? "Shrink chat" : "Expand chat"}
                >
                  <i className={`fas fa-${chatExpanded ? 'compress-alt' : 'expand-alt'}`}></i>
                </button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div 
              ref={chatContainerRef}
              className="card-body" 
              style={{ height: '450px', overflowY: 'auto', backgroundColor: '#f8f9fa' }}
            >
              {messages.length > 0 ? (
                messages.map((chat, idx) => (
                  <div 
                    key={idx} 
                    className={`mb-2 p-2 rounded ${
                      chat.event === 'sent' 
                        ? 'bg-primary text-white ms-auto' 
                        : chat.event === 'system' 
                        ? 'bg-secondary text-white text-center mx-auto' 
                        : 'bg-white border'
                    }`}
                    style={{ 
                      maxWidth: '80%', 
                      width: 'fit-content',
                      wordBreak: 'break-word'
                    }}
                  >
                    <div className="fw-bold">{chat.from}</div>
                    <div>{chat.msg}</div>
                    <small className="text-end d-block opacity-75">
                      {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </small>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted mt-5">
                  <i className="fas fa-comments fa-3x mb-3"></i>
                  <p>No messages yet. Start the conversation!</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message input */}
            <div className="card-footer">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
                  disabled={!chatClient.connected}
                />
                <button 
                  className="btn btn-primary" 
                  onClick={sendMsg} 
                  disabled={!chatClient.connected || !message.trim()}
                >
                  <i className="fas fa-paper-plane me-1"></i> Send
                </button>
              </div>
              
              {/* Connection status */}
              <div className="d-flex align-items-center mt-2">
                <div className={`spinner-grow spinner-grow-sm ${chatClient.connected ? 'text-success' : 'text-danger'}`} role="status" style={{width: '8px', height: '8px'}}></div>
                <small className="ms-1 text-muted">
                  {chatClient.connected ? 'Connected' : 'Disconnected'}
                </small>
                <div className="ms-auto">
                  <small className="text-muted">Press Enter to send</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile section - now secondary and takes less space */}
        <div className={`${chatExpanded ? 'col-lg-3' : 'col-lg-6'} order-lg-1 mb-4`}>
          <div className="card shadow-sm text-center mb-4">
            <div className="card-body">
              <div className="position-relative mb-3">
                <img
                  src="/profilePicMan.jpeg"
                  className="rounded-circle img-thumbnail"
                  alt="Profile"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />

                <h4>"I know this world is just a game, but this place, these people, that's all I have. So I'm not gonna be the good guy. I'm gonna be a great guy." -Guy</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
