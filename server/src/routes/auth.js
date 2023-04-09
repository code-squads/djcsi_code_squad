import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Owner } from '../models/OwnerSchema.js';
import { JWT_SECRET } from '../constants/config.js';

const router = express.Router();

function prepareJWT(owner){
  return jwt.sign(
    {
      _id: owner._id,
      restaurant_name: owner.restaurant_name,
      address: owner.address,
      phone: owner.phone,
      gstin: owner.gstin,
    },
    JWT_SECRET,
    { expiresIn: '2d' }
  );
}

router.post('/api/auth/signup', async (req, res) => {
  try {
    // Check for mandatory fields
    const mandatoryFields = ['restaurant_name', 'address', 'phone', 'gstin', 'password'];
    const missingFields = mandatoryFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing mandatory fields: ${missingFields.join(', ')}` });
    }

    req.body.password = await bcrypt.hash(req.body.password,10);
    
    // Create new owner object
    const owner = new Owner(req.body);

    console.log("New owner", owner);
    
    // Save owner to database
    const savedOwner = await owner.save();

    // Prepare the JWT with the owner's fields
    const token = prepareJWT(savedOwner);

    // Send the JWT in a cookie
    // res.cookie('jwt', token, {
    //   // httpOnly: true,
    //   maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    //   sameSite: 'lax',
    // });

    // Return a success response with the owner's fields
    return res.status(201).json({
      success: true,
      message: "New owner created successfully",
      profile: {
        _id: savedOwner._id,
        restaurant_name: savedOwner.restaurant_name,
        address: savedOwner.address,
        phone: savedOwner.phone,
        gstin: savedOwner.gstin,
      },
      token,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/api/auth/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Check if the phone field is provided in the request body
    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required.' });
    }

    // Check if the password field is provided in the request body
    if (!password) {
      return res.status(400).json({ error: 'Password is required.' });
    }

    // Find the owner with the provided phone number
    const owner = await Owner.findOne({ phone });

    // If no owner is found, return an error
    if (!owner) {
      return res.status(200).json({ success: false, message: 'Invalid credentials.' });
    }

    // Verify the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, owner.password);
    // const isPasswordValid = password === owner.password;

    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return res.status(200).json({ success: false, message: 'Invalid credentials.' });
    }

    // Prepare the JWT with the owner's fields
    const token = prepareJWT(owner);

    // Send the JWT in a cookie
    // res.cookie('jwt', token, {
    //   // httpOnly: true,
    //   maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    //   sameSite: 'lax',
    // });

    // Return a success response with the owner's fields
    return res.status(200).json({
      success: true,
      profile: {
        _id: owner._id,
        restaurant_name: owner.restaurant_name,
        address: owner.address,
        phone: owner.phone,
        gstin: owner.gstin,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
})
router.post('/api/auth/verify', async (req, res) => {
  console.log(req.body);
  const { token } = req.body;
  // const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, JWT_SECRET, (err, profile) => {
    if (err) {
      return res.status(203).json({ success: false, message: 'Invalid token' });
    } else {
      return res.json({ success: true, profile });
    }
  });
})

export default router;