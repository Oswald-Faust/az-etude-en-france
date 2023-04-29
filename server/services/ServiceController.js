const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const Opportunity = require('../opportunities/Opportunity');

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

router.get('/services', authorization, async (req, res) => {
  const opportunities = await Opportunity.find();
  const services = await Opportunity.find();

  data = {
        opportunities: opportunities,
        services: services
    };
    
    res.status(200).send(data);
});

module.exports = router;