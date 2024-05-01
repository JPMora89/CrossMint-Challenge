const axios = require("axios");
const endpoint = `https://challenge.crossmint.io/api/`;
const CANDIDATE_ID = "6e1fdf1c-db78-456f-9dea-9f2d01c191da"

// Function to retrieve the Goal Map for the challenges
const getMap = async () => {
    try {
      const response = await axios.get(
        `${endpoint}map/${CANDIDATE_ID}/goal`
      );
      const { goal } = response.data;
  
      return goal
      
    } catch (error) {
      console.error('Error: ' + error.message);
    }
  };

  module.exports = {getMap}