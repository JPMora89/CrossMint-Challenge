# Crossmint-Challenge
Take home challenge for Crossmint.io

## Install all dependencies
npm install

## Start server
node server.js

### Use the following routes to create challenges
1st challenge: GET http://localhost:3001/createX
2nd challenge: GET http://localhost:3001/createLogo

Check routes file for all other route options

#### NOTES 
2 Items should be added to a .env file for production: CANDIDATE_ID , the endpoint for API
Kept them independent to preserve modularity 
