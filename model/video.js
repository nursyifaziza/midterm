const mongoose = require('mongoose');
const { insertMany } = require('./product');
const product = require('./product');

const videoSchema = new mongoose.Schema({
    link: String,
    title: String,
    thumbnail: String
})

module.exports = mongoose.model('Video', videoSchema);
