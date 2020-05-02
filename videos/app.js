const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    console.log('Yo dawg!');
    next();
});

app.use('/add', (req, res, next) => {
    console.log('Yo dawg No.2!');
    res.send('<form action="/" method="POST"><h1>This is my first page!</h1><input type="text" name="input1"><button type="submit">submit</button></form>');
});

app.listen(3000);