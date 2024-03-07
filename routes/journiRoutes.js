const express = require('express')
const router = express.Router();

// Router for the Login screen
router.route('/login')
.get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Will getch account information')
})

// Router for the Register screen
router.route('/register')
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Creating Journi profile')
})

// Router for the Profile screen
router.route('/profile')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.put((req, res) => {
    res.end(`Updating trip id: ${req.body.id}`)
})
.delete((req, res) => {
    res.end(`Deleteing trip id: ${req.body.id}`)
})

// Router for the Add Trip screen
router.route('/trips/add')
.post((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`New trip created`)
})

// Router for the Hotel List screen
router.route('/hotels')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.put((req, res) => {
    res.end(`Updating hotel information for ${req.body.name}`)
})
.delete((req, res) => {
    res.end(`Deleteing hotel: ${req.body.name}`)
})

// Router for the Add Hotel screen
router.route('/hotels/add')
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hotel added')
})

// Router for the Flight List screen
router.route('/flights')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.put((req, res) => {
    res.end(`Updating flight information for ${req.body.flightNo}`)
})
.delete((req, res) => {
    res.end(`Deleteing flight: ${req.body.flightNo}`)
})

// Router for the Add Flight screen
router.route('/flights/add')
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Flight added')
})