/*
 *
 *  
 *
 * * */


const express = require('express'),
    app = express(),
    handlebars = require('handlebars'),
    hbs = require('express-handlebars'),
    Route = require('./api/router'),
    port = 4000;


//express
app.use('/public', express.static('public'));

//handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
}));

//redirige tout les chemin vers le router
app.use('/', Route);



app.listen(port, (err) => {

    if (err) {

        console.log('ne tourne pas sur le port : ' + port)

    } else {

        console.log('tourne sur le port : ' + port)
    }

});