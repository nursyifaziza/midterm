const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const commentSchema = new mongoose.Schema({
    videoId: {type: ObjectId, ref: 'Video'},
    username: {type: String, required: true},
    comment: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Comment', commentSchema)