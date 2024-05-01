

const express = require('express');
const router = express.Router();
const { createLogo, deleteAllPolyanets } = require('../Models/createLogo');
const rateLimitMiddleware = require('../Middleware/rateLimit');
const {getMap} = require('../Utils/createMap')

// Route to createLogo

router.get('/', rateLimitMiddleware, async (req, res, next) => {
  try {
    // Call the createLogo function
    await createLogo();

    // success message
    return res.json({ message: 'createLogo executed successfully.' });
  } catch (error) {
    // Handle errors
    console.error('Error with createLogo function:', error);
    return next(error);
  }
});

// Route to retrieve the Goal Map, allows me to see response for Goal map instead of looking at provided goal map html
router.get('/getmap', rateLimitMiddleware, async (req,res, next) => {
    try {
        // Call the getMap function defined in Utils-createMap
        await getMap();
        // success message
        return res.json({message: "called the Goal Map"})
    } catch (error) {
        // Handle errors
        console.error('Error executing getMap:', error);
        return next(error);
      }
})

// Route to delete the Polyanets, allows me to change the goal map and check to see if 
// createLogo function is actually working

router.delete('/deleteAll', rateLimitMiddleware, async (req, res, next) => {
    try {
      // Call the deleteAllPolyanets function 
      await deleteAllPolyanets();
  
      // success message
      return res.json({ message: 'deleteAllPolyanets executed successfully.' });
    } catch (error) {
      // Handle errors
      console.error('Error executing deleteAllPolyanets:', error);
      return next(error);
    }
  });

module.exports = router;



  

