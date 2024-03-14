const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";
const Customer = require('../models/user_access/Customer');
const verifyToken = require('../middleware/verifyToken.js')

// User Signup endpoint
router.post('/usersignup', async (req, res) => {
  let success = false;
  try {

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a Customer
    const user = new Customer({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
      

    });

    // Save the user to the database
    await user.save();
    const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET);

    success = true;

    res.status(201).json({ success, authtoken, message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ success, error: err.message });
  }
});

// User Login endpoint
router.post('/userlogin', async (req, res) => {
  let success = false;
  try {
    // Find the user by email
    const user = await Customer.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Create a JWT token
    const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET);
    success = true

    res.json({ success, authtoken });
  } catch (err) {
    res.status(500).json({ success, error: err.message });
  }
});

//User details usertoken
router.get('/userinfo', verifyToken, async (req, res) => {
  try {
    // Use req.userId to retrieve user information from the database
    const user = await Customer.findById(req.userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Send user information as a response

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});






module.exports = router;
