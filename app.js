require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./model/user');
//const req = require('express/lib/request');

const app = express();

app.use(express.json());

// Register
app.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(firstName && lastName && email && password)) {
      return res.status(400).send('Failed to register user.  Try again later.');
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send('User Already Exists.  Please Login.');
    }

    const encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(),
      password: encryptedUserPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '15m',
      }
    );
    // save user token
    user.token = token;

    console.log(`User created:  [${firstName} ${lastName} ${email}]`);

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Login
// app.post('/login', (req, res) => {});

module.exports = app;
