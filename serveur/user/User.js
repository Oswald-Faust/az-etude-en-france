var mongoose = require('mongoose');

export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // autres propriétés et méthodes
}

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
