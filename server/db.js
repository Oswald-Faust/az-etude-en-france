const mongoose = require('mongoose');

const db_url = 'mongodb+srv://bamenoujeandavid:lol2004_@cluster0.cyo9e2w.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connection to MongoDB successful'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));
