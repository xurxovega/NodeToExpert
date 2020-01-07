var express = require('express');
var app = express();
var hbs = require('hbs');
require('./hbs/helpers');

//Al subir la app a Heroku.com no sabemos el puerto que nos van a facilitar.
//
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



/*app.get('/', (req, res) => {
    //res.send('Hola Mundo');
   
//     let output = {
//        name: 'Darío Jorge',
//        age: 34,
//        url: req.url
//    }
//    res.send(output); 
});*/

// app.get('/home', (req, res) => {})

app.get('/', (req, res) => {
    res.render(
        'home',
        {
            name: 'Darío jorge vega silva', 
        });
});

app.get('/about', (req, res) => {
    res.render('about');
});


/* app.listen(3000, ()=> {
    console.log('Server listen at port 3000');
}); */
app.listen(port, () => {
    console.log(`Server listen at port ${ port }`)});
