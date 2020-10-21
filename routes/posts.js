const express = require('express');
const router = express.Router();
const Post = require('../models/post');


//GETS BACK ALL THE POSTS
router.get('/', async (req , res) => {
    //res.send('Adoula we\'re on posts!');
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch (err) {
        res.json({ message: err })
    }
});

//GETS BACK A SPECIFIC POST
router.get('/:postId', async (req , res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({ message: err })
    }
});

//SUMBITS A POST
/*router.post('/', (req , res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => { 
            res.json({ message: err }) 
        });

});*/

//SUMBITS A POST
router.post('/', async (req , res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedpost = await post.save();
        res.json(savedpost);
    }catch (err) {
        res.json({ message: err })
    }
    
});

//DELETE A SPECIFIC POST
router.delete('/:postId', async (req , res) => {
    try {
        const deltedpost = await Post.remove({_id: req.params.postId});
        res.json(deltedpost);
    }catch (err) {
        res.json({ message: err })
    }
});

//UPDATE A SPECIFIC POST
router.patch('/:postId', async (req , res) => {
    try {
        const updatedpost = await Post.updateOne({_id: req.params.postId}, { $set: {title: req.body.title} });
        res.json(updatedpost);
    }catch (err) {
        res.json({ message: err })
    }
});

router.get('/post1', (req , res) => {
    res.send('Adoula we\'re on post 1 though!');
});

module.exports = router;
