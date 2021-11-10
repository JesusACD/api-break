const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaMovies = new Schema({
    title: String,
    tmdb: Number,
    quality: String,
    language: String,
    links: String,
    createdAt: { type: Date, default: Date.now }
})

const MoviesM = mongoose.model('movies', schemaMovies)
module.exports = MoviesM