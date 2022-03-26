require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido statico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David De Paz Ramirez',
        curso: 'Curso de NodeJS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'David De Paz Ramirez',
        curso: 'Curso de NodeJS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'David De Paz Ramirez',
        curso: 'Curso de NodeJS'
    });
});

app.get('*', (req, res) => { 
    res.sendFile( __dirname + '/public/404.html')
});
app.listen(port, () => {
    console.log(`El ejemplo esta corriendo en el puerto ${port}`);
});