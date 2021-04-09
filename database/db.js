import mongoose from 'mongoose';
import '../models/Launch.js';

const url = 'mongodb://localhost:27017/spaceX';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected")
});