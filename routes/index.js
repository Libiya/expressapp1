/*var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/
//index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = reqiure("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/** 
 * App Configurartion
 */


/**
 * Routes Definitions
 */

app.get("/",(req,res) =>{
  res.status(200).send("Welcome");
});

/**
 * Server Activation
 */
app.listen(port,()=>{
  console.log(`Listening to request on http://localhost:${port}`);
});
