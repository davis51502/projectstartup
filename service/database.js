const { MongoClient, ObjectId } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db('movieratings');
const userCollection = db.collection('user');
const collection = db.collection('movies');

async function main() {
  try {
    // Test that you can connect to the database
    await client.connect();
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Connection failed to ${url} because ${ex.message}`);
    process.exit(1);
  }
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addMovie(movie) {
  // Check if movie with the same TMDB ID already exists
  const existingMovie = await collection.findOne({ tmdbId: movie.tmdbId });
  
  if (existingMovie) {
    throw new Error('Movie already exists in watchlist');
  }
  
  return await collection.insertOne(movie);
}

async function getMovies(query = {}, options = {}) {
  const cursor = collection.find(query, options);
  return cursor.toArray();
}

async function deleteMovieById(movieId) {
  const result = await collection.deleteOne({ _id: ObjectId.createFromHexString(movieId) });
  return result.deletedCount;
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addMovie, 
  getMovies, 
  deleteMovieById
};

// Connect to database when module is imported
main().catch(console.error);