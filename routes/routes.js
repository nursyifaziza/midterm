const express = require('express');
const router = express.Router();
const Video = require('../model/video');
const Product = require('../model/product');
const Comment = require('../model/comment');

module.exports = router;

//Get all video
router.get('/videos', async (req, res) => {
    try {
        const data = await Video.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

//Get a video detail by videoId
router.get('/video/:id', async (req, res) => {
    try {
        const data = await Video.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(404).json({message: "Video doesn't exist"})
    }
})

//Get all products by videoId
router.get('/products/:id', async (req, res) => {
    try {
        const data = await Product.find({videoId: req.params.id});
        res.json(data)
    } catch (error) {
        res.status(404).json({message: "Currently, there are no products associated with this video"})
    }
})

//Get all comment by videoId
router.get('/comments/:id', async (req, res) => {
    try {
        const data = await Comment.find();
        res.json(data)
    } catch (error) {
        res.status(404).json({message: "There are no comments"})
    }
})

// Post a comment on a video
router.post('/comments/:id', async (req, res) => {
    const data = new Comment({
        videoId: req.params.id,
        username: req.body.username,
        comment: req.body.comment
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})