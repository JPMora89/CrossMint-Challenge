
// Function to split the word that is returned for items within the Goal Map

const splitWord = async (word) => {
    const array = word.split("_");
    const adjective = array[0];
  
    return adjective.toLowerCase();
  };

  module.exports = {splitWord}