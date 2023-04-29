const express = require('express')
const router = express.Router()

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

router.get('/services', authorization, (req, res) => {
    data = {
        opportunities:'oppo'
    };
    
    res.status(200).send(data);
});