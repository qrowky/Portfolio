const express = require('express'),
 app = express(),
 hbs = require('express-handlebars'),
 port = 4000;
 
 const ROUTER = require('./api/router')


/*
 *  hbs
 * * * * * */
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'

}));

/*
 *  express
 * * * * * */
app.use('/public', express.static('public'));

app.use('/',ROUTER)


app.listen(port, () => {

    console.log('connecter sur le port : ' + port);

})

module.exports = app