const axios = require("axios");
const { getMap } = require("../Utils/createMap");
const { addPolyanet } = require("./addPolyanet");
const { addSoloon } = require("./addSoloon");
const { addCometh } = require("./addCometh");

// function to create the Logo, checks Goal map then adds
// corresponding item based on response and params received.

const createLogo = async (start = 0) => {
  const goal = await getMap();

  let row = start;
  for (row; row < goal.length; row++) {
    for (const col in goal[row]) {
      try {
        if (goal[row][col] == "POLYANET") {
          await addPolyanet(row, col);
        } else if (goal[row][col].includes("SOLOON")) {
          await addSoloon(goal[row][col], row, col);
        } else if (goal[row][col].includes("COMETH")) {
          await addCometh(goal[row][col], row, col);
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.log(`Way too many requests bud, slow it down!`);
        } else {
          console.error("Error:", error.message);
        }
      }
    }
  }
};

// Function to delete all Polyanets, don't need to delete other items to see if our createLogo function worked
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
          console.log(`POLYANETS deleted`);
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    }
  }
};

module.exports = { createLogo, deleteAllPolyanets };
