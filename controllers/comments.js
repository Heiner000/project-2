// required packages
const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptoJs = require('crypto-js')
const { fail } = require('assert')
const axios = require('axios')

// GET /comments/new -- show form for new comment - comments new
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})

// POST /comments -- post a new comment
router.post('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})

// PUT /comments/:id/edit edit a comment - comments edit
router.put('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})

// DELETE /comments/:id -- delete a comment
router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})

// export the router instance
module.exports = router