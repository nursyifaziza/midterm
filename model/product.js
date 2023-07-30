const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const Video = require('../model/video');

const productSchema = new mongoose.Schema({
    videoId: {type: ObjectId, ref: 'Video'},
    link: String,
    title: String,
    price: Number
})

module.exports = mongoose.model('Product', productSchema);