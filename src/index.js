const express = require('express');
const path = require('path');
const cookieParser= require('cookie-parser');

const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabse = require('./config/database');
const { auth } = require('./middlewares/authMiddleware');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(auth);
app.use(routes);

initDatabse(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    });