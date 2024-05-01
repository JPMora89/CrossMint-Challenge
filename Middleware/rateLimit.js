const rateLimit = require("express-rate-limit");

// Create a rate limiter middleware to add to our API Calls to avoid hitting 429 Errors
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // 100 requests per hour
  message: "Too many requests, try again later.",
});

module.exports = limiter;
