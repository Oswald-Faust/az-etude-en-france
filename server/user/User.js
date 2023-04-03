var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
  
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

// var mongoose = require('mongoose');

// var UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// mongoose.model('User', UserSchema);

// module.exports = mongoose.model('User');
