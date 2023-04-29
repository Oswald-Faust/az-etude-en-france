const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./User');

const secretKey = "secret-key";

router.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    console.log("Forbidden");
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, secretKey);
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

// Signup
router.post('/signup', function (req, res) {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const passwd = req.body.password;

  // Check for existing user with the same email
  User.findOne({email:email})
    .then((user) => {
      if(user){
          // User found
          console.log(user);
          res.status(409).json({message:user.email});
      } else {
          // Create a new user and save it to the database
          const newUser = new User({ email:email, password:passwd, name:name});
          newUser.save()
            .then(() => {
              // set a cookie or token to indicate that user is logged in
              const token = jwt.sign(jsonizeUser(newUser), secretKey);
              res
              // set a cookie to store our new created user
              .cookie('access_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              })
              .status(201).send({message: "Account created successfully."});
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({message: 'Internal server error'});
          })
      }
    });
});

// Login
router.post('/login', (req, res) => {
  const email = req.body.email;
  const passwd = req.body.password;

  // Check for existing user with the same email
  User.findOne({email:email})
    .then((user) => {
      if(user){
        // User found
        if(user.password === passwd) {
          // credentials are correct
          // set a cookie or token to indicate that user is logged in
          const token = jwt.sign(jsonizeUser(user), secretKey);
          res.send({message: 'OK !', token:token});
          // console.log(res.header().get('set-cookie'))
        } else {
          return res.status(401).json({message: "Wrong credentials."});
        }
      } else {
        return res.status(404).json({message: "User not found."});
      }
    });
});

// Get user infos
router.get('/infos', authorization, (req, res) => {
  const token = req.cookies.access_token;
  const data = jwt.verify(token, secretKey);
  data = {
    name: data.name,
    email:data.email,
  }
  res.status(200).send(data);
});

// Logout
router.get("/signout", authorization, (req, res) => {
  res
  .clearCookie("access_token")
  .status(200)
  .send({message: "Logged out successfully !"});
});

function jsonizeUser (user) {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    __v: user.__v,
  };
};

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:email', function (req, res) {
    User.findOneAndRemove({email:req.params.email}, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

module.exports = router;
