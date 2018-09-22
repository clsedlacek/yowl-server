// dependencies
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');

// base directory store
global.__basedir = __dirname;
global.__publicdir = __dirname + '/public';

// package data
const metadata = require('./package.json');

// preliminary server creation
const app = express();
const httpPort = 3000;

// middleware and routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// server listen start
app.listen(httpPort, () => console.log(`Yowl HTTP server version ${metadata.version} listening on port ${httpPort}`));
