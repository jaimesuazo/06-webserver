require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de node'
    });
});
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de node'
    });
});
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de node'
    });
});
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
