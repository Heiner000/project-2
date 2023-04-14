// required packages
const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

// POST /comments -- post a new comment
router.post('/', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/users/login?message=You need to log in to leave a comment!')
        } else {
            const url = `http://www.omdbapi.com/?i=${req.body.movieId}&apikey=${process.env.API_KEY}`
            const response = await axios.get(url)
            const movieData = response.data
            const [movie] = await db.movie.findOrCreate({
                where: { imdbID: req.body.movieId },
                defaults: {
                    imdbID: req.body.movieId,
                    title: movieData.Title,
                    year: movieData.Year,
                    director: movieData.Director,
                    plot: movieData.Plot,
                    poster: movieData.Poster
                }
            })
            const newComment = await db.comment.create({
                content: req.body.content,
                userId: res.locals.user.id,
                movieId: movie.id
            })
            res.redirect(`/movies/${req.body.movieId}`)
        }

    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// GET /comments/:id/edit edit a comment - comments edit
router.get('/edit/:id', async (req, res) => {
    try {
        const comment = await db.comment.findByPk(req.params.id)
        if (res.locals.user && res.locals.user.id === comment.userId) {
            res.render('comments/edit', { comment: comment })
        } else {
            res.redirect(`/movies/${comment.movieId}`)
        }
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

// PUT /comments/:id -- update a comment
router.put('/:id', async (req, res) => {
    try {
        const comment = await db.comment.findByPk(req.params.id)

        if (res.locals.user && res.locals.user.id === comment.userId) {
            await comment.update({
                content: req.body.content
            })

            const movie = await db.movie.findByPk(comment.movieId)

            res.redirect(`/movies/${movie.imdbID}`)
        } else {
            res.redirect(`/movies/${movie.imdbID}`)
        }
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})


// DELETE /comments/:id -- delete a comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await db.comment.findByPk(req.params.id)
        if (res.locals.user && res.locals.user.id === comment.userId) {
            await comment.destroy()

            const movie = await db.movie.findByPk(comment.movieId)

            res.redirect(`/movies/${movie.imdbID}`)
        } else {
            res.redirect(`/movies/${movie.imdbID}`)
        }
    } catch (err) {
        console.log(err)
    }
})

// export the router instance
module.exports = router