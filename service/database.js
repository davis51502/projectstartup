const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db('movieratings');
const collection = db.collection('movies');

async function main() {
  try {
    // Test that you can connect to the database
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Connection failed to ${url} because ${ex.message}`);
    process.exit(1);
  }

  try {
    // Insert a movie document
    const movie = {
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      year: 2010,
      rating: 8.8,
    };
    await collection.insertOne(movie);
    console.log('Movie inserted:', movie);

    // Query the movies
    const query = { genre: 'Sci-Fi', rating: { $gte: 8 } };
    const options = {
      sort: { year: -1 },
      limit: 5,
    };
    const cursor = collection.find(query, options);
    const movies = await cursor.toArray();
    console.log('Movies found:');
    movies.forEach((m) => console.log(m));

    // Delete movies matching the query
    const deleteResult = await collection.deleteMany(query);
    console.log(`${deleteResult.deletedCount} movie(s) deleted.`);
  } catch (ex) {
    console.log(`Database (${url}) error: ${ex.message}`);
  } finally {
    await client.close();
  }
}

main();