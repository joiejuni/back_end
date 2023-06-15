const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();

module.exports = session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: new FileStore({
            path: '../sessions',
        }),
});

