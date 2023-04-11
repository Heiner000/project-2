// required packages
const express = require('express')
const router = express.Router()
const db = require('../models')
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
        const movieData = response.data

        const movie = await db.movie.findOne({
            where: { imdbID: req.params.movie_id }
        })
        let comments = []

        if (movie) {
            comments = await db.comment.findAll({
                where: {
                    movieId: movie.id
                },
                include: [db.user]
            })
        }

        res.render('movies/details.ejs', {
            movie: movieData,
            comments: comments
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
                where: { imdbID: req.params.movie_id },
                defaults: {
                    title: movieData.Title,
                    year: movieData.Year,
                    director: movieData.Director,
                    plot: movieData.Plot,
                    poster: movieData.Poster
                }
            })
            await res.locals.user.addMovie(movie)
            console.log('😎 added movie to faves 👍')
            res.redirect(`/users/profile`)
        }
    } catch (err) {
        console.log('🛑 There has been an error')
        console.log(err)
        res.redirect('/movies/results')
    }
})

// DELETE /:movie_id/favorites -- remove a movie from favorites list
router.delete('/:movie_id/favorites', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/users/login?message=You need to log in to delete a movie from your list of favorites!')
        } else {
            const movie = await db.movie.findOne({
                where: { imdbID: req.params.movie_id }
            })
            if (movie) {
                await res.locals.user.removeMovie(movie)
                res.redirect('/users/profile')
            } else {
                res.redirect('/users/profile?message=Movie not found in your favorites')
            }
            // res.redirect('/users/profile?message=Movie removed from favorites!')
            // console.log('🔥 fave movie destroyed')
        }
    } catch (err) {
        console.log('🛑 There has been an error')
        console.log(err)
        res.redirect('/')
    }
})

// export the router instance
module.exports = router