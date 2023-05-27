const express = require('./config/express');
const {logger} = require('./config/winston');
const app = express();

const port = 3000;
express().listen(port);
app.set("view engine","ejs");
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);