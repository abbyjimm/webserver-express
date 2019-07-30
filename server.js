const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        name: 'abigail jimenez'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});
/*app.get('/', (req, res) => {
    //res.send('Hello World')
    let output = {
        name: 'Abigail',
        age: 29,
        url: req.url
    }
    res.send(output);
});*/

/*app.get('/data', (req, res) => {
    res.send('Hello Data')
});*/

app.listen(port, () => {
    console.log(`Listen to requests in ${port} port`);
})