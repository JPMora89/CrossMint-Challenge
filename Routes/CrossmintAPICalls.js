

const express = require('express');
const router = express.Router();
const { createX, deleteAllPolyanets } = require('../Models/createX');
const rateLimitMiddleware = require('../Middleware/rateLimit');

// Define the "/" route used to create the X
router.get('/', rateLimitMiddleware, async (req, res, next) => {
  try {
    // Call the createX function
    await createX();

    // Success message
    return res.json({ message: 'createX executed successfully.' });
  } catch (error) {
    // Handle errors
    console.error('Error executing createX:', error);
    return next(error);
  }
});

// Define other routes below

router.delete('/deleteAllPolyanets', rateLimitMiddleware, async (req, res, next) => {
    try {
      // Call the deleteAllPolyanets function with a timeout of 15 seconds (15000 milliseconds)
      await deleteAllPolyanets();
      console.log('deleteAllPolyanets function executed successfully.');
  
      // Success message
      return res.json({ message: 'deleteAllPolyanets function executed successfully.' });
    } catch (error) {
      // Handle errors
      console.error('Error executing deleteAllPolyanets function:', error);
      return next(error);
    }
  });

module.exports = router;



  

