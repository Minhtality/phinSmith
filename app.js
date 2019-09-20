const express = require('express');
const ejs = require('ejs');
const app = express();



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("pages/index")
})

app.get('/menu', (req, res) => {
    res.render("pages/menu")
})

app.get('/discover', (req, res) => {
    res.render("pages/discover")
})

app.get('/aboutus', (req, res) => {
    res.render("pages/aboutUs")
})

app.get('/*', (req, res) => {
    res.render("pages/index")
})






app.listen(process.env.PORT || 3000, () => console.log(`Example app listening !`))