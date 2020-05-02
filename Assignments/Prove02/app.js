const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const book = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyparser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Add Book Title and Summary'});
});

app.get('/book', (req, res, next) => {
    res.render('book', {pageTitle: 'Book Title and Summary', book: book});
});
app.post('/add', (req, res, next) => {
    book.push({ title: req.body.title });
    book.push({ summary: req.body.summary });
    res.redirect('/book');
});

app.listen(3000);