const express = require('express')
const hbs = require('hbs');
const path = require('path')
/* const dotenv = require('dotenv')
dotenv.config() */
require('dotenv').config()
const app = express()

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

/* // Servir contenido estático
app.use(express.static(__dirname, + '/public')) */

// Servir contenido estático con path.join
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cristian Hernandez',
        titulo: 'Curso de Node-HBS Home'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Cristian Hernandez',
        titulo: 'Curso de Node-HBS Generic'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Cristian Hernandez',
        titulo: 'Curso de Node-HBS Elements'
    })
})

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/generic', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/generic.html'))
})

app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/elements.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/old/404.html'))
}) */

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})