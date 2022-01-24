const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

/* INIT express app */
const app = express();

/* SHOW access info if it is developing environment */
if(process.env.ENVIRONMENT === 'dev'){
    app.use(morgan('dev'));
}

app.use(fileUpload());

/* IMPORT all routes */
const moviesRoutes = require('./routes/moviesRoutes');

app.use(express.json({limit : '10kb'}));

/* SET public files */
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/admin`));

/* INCLUDES all the routes */
app.use('/movies/', moviesRoutes);

//app.use('/chat/', chatRoutes);
module.exports = app;