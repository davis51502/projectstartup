const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();
const path = require('path');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

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
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// Create a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// Logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
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
    console.log('Received movie:', movie); // Debugging log
    const addedMovie = await DB.addMovie(movie);
    res.send({ msg: 'Movie added successfully', movie: addedMovie });
  } catch (err) {
    console.error('Error adding movie:', err.message); // Debugging log
    res.status(500).send({ msg: 'Failed to add movie', error: err.message });
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
    return  DB.getUserByToken(value);
  }
  
  return DB.getUser(value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: process.env.NODE_ENV === 'production', // true for production, false for development
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Start the server
const httpService = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

peerProxy(httpService);