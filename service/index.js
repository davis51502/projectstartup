const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const path = require('path');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware for parsing JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Serve static files from the public directory
app.use(express.static('public'));

// Router for API endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Middleware to verify authentication
const verifyAuth = async (req, res, next) => {
  try {
    console.log('Full Cookies:', req.cookies);
    console.log('Auth Cookie:', req.cookies[authCookieName]);

    // If no token cookie exists, immediately reject
    if (!req.cookies[authCookieName]) {
      console.log('No authentication token found');
      return res.status(401).send({ msg: 'No authentication token' });
    }

    const user = await findUser('token', req.cookies[authCookieName]);
    
    if (user) {
      console.log('Authenticated user:', user.email);
      req.user = user; // Attach user to request for potential further use
      next();
    } else {
      console.log('Authentication failed: Invalid token');
      res.status(401).send({ msg: 'Invalid authentication token' });
    }
  } catch (err) {
    console.error('Authentication error:', err);
    res.status(500).send({ msg: 'Authentication failed', error: err.message });
  }
};

// Create a new user
apiRouter.post('/auth/create', async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await findUser('email', req.body.email);
    if (existingUser) {
      return res.status(409).send({ msg: 'User already exists' });
    }

    // Create new user
    const user = await createUser(req.body.email, req.body.password);
    
    // Set authentication cookie
    setAuthCookie(res, user.token);
    
    // Send response
    res.status(201).send({ email: user.email });
  } catch (err) {
    console.error('User creation error:', err);
    res.status(500).send({ msg: 'Failed to create user', error: err.message });
  }
});

// Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  try {
    const user = await findUser('email', req.body.email);
    
    if (!user) {
      return res.status(401).send({ msg: 'User not found' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).send({ msg: 'Invalid credentials' });
    }

    // Generate new token
    const newToken = uuid.v4();
    
    // Update user's token in database
    await DB.updateUserToken(user.email, newToken);
    
    // Set authentication cookie
    setAuthCookie(res, newToken);
    
    // Send response
    res.send({ email: user.email });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send({ msg: 'Login failed', error: err.message });
  }
});

// Logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  try {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      await DB.updateUserToken(user.email, null); // Clear the token in the database
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ msg: 'Failed to log out', error: err.message });
  }
});

// Get all movies
apiRouter.get('/movies', verifyAuth, async (_req, res) => {
  try {
    const movies = await DB.getMovies();
    res.send(movies);
  } catch (err) {
    res.status(500).send({ msg: 'Failed to get movies', error: err.message });
  }
});

// Add a new movie
apiRouter.post('/movies', verifyAuth, async (req, res) => {
  try {
    const movie = req.body;
    
    // Validate movie data
    if (!movie.title) {
      return res.status(400).send({ msg: 'Movie title is required' });
    }

    const addedMovie = await DB.addMovie(movie);
    res.status(201).send({ 
      msg: 'Movie added successfully', 
      movie: addedMovie.insertedId 
    });
  } catch (err) {
    console.error('Movie addition error:', err);
    
    // Check for duplicate movie error
    if (err.message === 'Movie already exists in watchlist') {
      return res.status(409).send({ msg: err.message });
    }

    res.status(500).send({ 
      msg: 'Failed to add movie', 
      error: err.message 
    });
  }
});

// Delete a movie by ID
apiRouter.delete('/movies/:id', verifyAuth, async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedCount = await DB.deleteMovieById(movieId);
    if (deletedCount > 0) {
      res.send({ msg: `Movie with ID ${movieId} deleted` });
    } else {
      res.status(404).send({ msg: `Movie with ID ${movieId} not found` });
    }
  } catch (err) {
    res.status(500).send({ msg: 'Failed to delete movie', error: err.message });
  }
});

// Default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

// Helper functions
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return await DB.getUserByToken(value);
  }
  
  return await DB.getUser(value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});