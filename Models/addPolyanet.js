const axios = require("axios");
const endpoint = `https://challenge.crossmint.io/api/`;
const CANDIDATE_ID = "6e1fdf1c-db78-456f-9dea-9f2d01c191da";

// Function to add POLYANETS to corresponding place according to Goal Map.
// The splitWord function retrieves the ADJECTIVE returned in the Goal Map so we can add them as a parameter to our API Call.
const addPolyanet = async (row, col) => {
  try {
    await axios.post(`${endpoint}polyanets/`, {
      candidateId: CANDIDATE_ID,
      row,
      column: col,
    });
  } catch (error) {
    if (error.response && error.response.status === 429) {
      return addPolyanet(row, col);
    } else {
      throw error;
    }
  }
};

module.exports = { addPolyanet };
