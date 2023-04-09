// required packages
const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptoJs = require('crypto-js')
const { fail } = require('assert')
const axios = require('axios')


// mount routes on router
// GET / -- show recent favs - movies index
router.get('/', async (req, res) => {
    try {
        res.render('movies/index.ejs')

    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// GET /results -- fetch api data & display results - movies results
router.get('/results', async (req, res) => {
    try {
        console.log(req.query.searchInput)
        const url = `http://www.omdbapi.com/?s=${req.query.searchInput}&apikey=${process.env.API_KEY}` 
        const response = await axios.get(url)
        res.render('movies/results.ejs', {
            searchInput: req.query.searchInput,
            responseData: response.data
    })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// GET /:movie_id -- show movie details for specific movie - movies show
router.get('/:movie_id', async (req, res) => {
    try {
        console.log(req.params.movie_id)
        const url = `http://www.omdbapi.com/?i=${req.params.movie_id}&apikey=${process.env.API_KEY}`
        const response = await axios.get(url)
        res.render('movies/details.ejs', {
            movie: response.data
        })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// POST /:id/favorites -- add a movie to user's favorites list
router.post('/:movie_id/favorites', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/users/login?message=You need to log in to add a movie to your list of favorites!')
        } else {
            const url = `http://www.omdbapi.com/?i=${req.params.movie_id}&apikey=${process.env.API_KEY}`
            const response = await axios.get(url)
            const movieData = response.data
            const [movie] = await db.movie.findOrCreate({
                where: { imdbID: movieId },
                defaults: {
                    title: movieData.Title,
                    year: movieData.Year,
                    director: movieData.Director,
                    plot: movideData.Plot,
                    poster: movideData.Poster
                }
            })
            await res.locals.user.addMovie(movie)
            res.send('add movie to faves')
            // res.redirect(`/movies/${movieId}`)
        }
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// DELETE /favorites/:id -- remove a movie from favorites list




// export the router instance
module.exports = router