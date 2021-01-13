const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', async (req, res) => {
  try {
    const articlePosts = await Article.find();
    res.json(articlePosts);
  } catch(err){
    res.json({message:err});
  }
  });

// router.post('/', async (req, res) => {
//   // console.log(req.body);
//   const article = new Article({
//     Title: req.body.Title,
//     Date: req.body.Date,
//     Copy: req.body.Copy,
//     Image: req.body.Image
// });

//   try {
//     const savedArticle = await article.save();
//     res.json(savedArticle);
//   } catch (err) {
//     res.json({ message: err});
//   }
// });


//specific article

router.get('/:articleId', (req, res) => {
  console.log(req.params.articleId);
})


module.exports = router;