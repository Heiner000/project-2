// required packages
const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptoJs = require('crypto-js')
const { fail } = require('assert')

// mount routes on router
// GET / -- show recent favs - movies index
router.get('/', async (req, res) => {
    try {
        res.send('Show a list of recently favorited movies')

    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// POST /search -- fetch api data & display results - movies results


// GET /:id -- show movie details for specific movie - movies show


// POST /:id/favorites -- add a movie to user's favorites list


// DELETE /favorites/:id -- remove a movie from favorites list




// export the router instance
module.exports = router