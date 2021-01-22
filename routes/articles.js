const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

//All articles
router.get('/', async (req, res) => {
  try {
    const articlePosts = await Article.find();
    res.json(articlePosts);
  } catch(err){
    res.json({message:err});
  }
  });
  
//Specific article
router.get('/:articleId', async (req, res) => {
  try {
  const article = await Article.findById(req.params.articleId);
  res.json(article);
  } catch(err){
    res.json({message:err});
  }
});

module.exports = router;