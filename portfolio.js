
const express = require('express'),
    app = express(),
    handlebars = require('handlebars'),
    hbs = require('express-handlebars'),
    Route = require('./api/router'),
    session = require('express-session'),

    flash = require('connect-flash'),
    bodyParser = require('body-parser'), 
    port = 5000;

    app.use(session({

        name: 'biscuit',
        secret: 'Portfolio',
        saveUninitialized: true, // ne crée pas de session tant que quelque chose n'est pas stocké
        resave: false, //ne pas enregistrer la session si non modifié
        maxAge: 24 * 60 * 60 * 1000,
        //me permet de stocker la sesion dans un store dans ma db et me la je connect le store a ma db
        
    
    }))

//express
app.use('/public', express.static('public'));

//handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
}));
/*
 *   Body Parser
 * * * * * */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

app.use(flash())
//redirige tout les chemin vers le router
app.use('/', Route);



app.listen(port, (err) => {

    if (err) {

        console.log('ne tourne pas sur le port : ' + port)

    } else {

        console.log('tourne sur le port : ' + port)
    }

});
