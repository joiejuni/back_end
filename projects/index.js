const express = require('./config/express');
const { logger } = require('./config/winston');

const port = 80;
const hostname = '34.64.32.180';

express().listen(port, hostname, () => {
  logger.info(`${process.env.NODE_ENV} - API Server Start At ${hostname}:${port}`);
});


//express().listen(port);