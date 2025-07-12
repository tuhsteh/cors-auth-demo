require('@dotenvx/dotenvx').config();
require('./config/database').connect();
const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const auth = require('./middleware/auth');
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
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send('Failed to login user.  Try again later.');
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '15m',
        }
      );
      // save user token
      user.token = token;

      console.log(
        `User logged in:  [${user.first_name} ${user.last_name} ${email}]`
      );

      return res.status(200).json(user);
    } else {
      res.status(400).send('Failed to login user.  Try again later.');
    }
  } catch (err) {
    console.log(err);
  }
});

// Welcome
app.post('/welcome', auth, (req, res) => {
  res.status(200).send(`${new Date()} Welcome to FreeCodeCamp 🙌`);
});

module.exports = app;
