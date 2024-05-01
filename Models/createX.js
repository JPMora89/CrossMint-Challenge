const axios = require("axios");
const { getMap } = require("../Utils/createMap");
const endpoint = "https://challenge.crossmint.io/api/";
const CANDIDATE_ID = "6e1fdf1c-db78-456f-9dea-9f2d01c191da";

// Function to create the X on the map, it calls the getMap function to retrieve the Goal Map
// Checks to see where POLYANETS are located then makes those POST calls in the corresponding for loops to add them to our new map.

const createX = async (start = 0) => {
  const goal = await getMap();
  let row = start;

  for (row; row < goal.length; row++) {
    for (const col in goal[row]) {
      if (goal[row][col] == "POLYANET") {
        try {
          await axios.post(`${endpoint}polyanets/`, {
            candidateId: CANDIDATE_ID,
            row,
            column: col,
          });
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    }
  }
};

// Function to delete all Polyanets, allows us to verify that our createX function was working correctly
const deleteAllPolyanets = async (start = 0) => {
  const goal = await getMap();
  let row = start;

  for (let row = 0; row < goal.length; row++) {
    for (const col in goal[row]) {
      if (goal[row][col] == "POLYANET") {
        try {
          await axios.delete(`${endpoint}polyanets/`, {
            data: {
              candidateId: CANDIDATE_ID,
              row,
              column: col,
            },
          });
          console.log(`POLYANETS deleted successfully!`);
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    }
  }
};

module.exports = { createX, deleteAllPolyanets };
