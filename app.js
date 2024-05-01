"use strict";

/** Express app for OffTheBlockChain */

const express = require("express");

const { NotFoundError } = require("./expressError");

const CrossMintAPICallRoutes = require("./Routes/CrossmintAPICalls")
const CreateLogoRoutes = require("./Routes/CreateLogo")



const app = express();

app.use(express.json());

app.use("/createX", CrossMintAPICallRoutes)
app.use("/createLogo", CreateLogoRoutes)



/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
    return next(new NotFoundError());
  });
  
  /** Generic error handler; anything unhandled goes here. */
  app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
  });
  
  module.exports = app;  