const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

//all posts
router.get('/', async (req, res) => {
  try {
    const articlePosts = await Article.find();
    res.json(articlePosts);
  } catch(err){
    res.json({message:err});
  }
  });

//specific post

router.get('/:articleId', async (req, res) => {
  try {console.log("nu skrivs det")
  const article = await Article.findById(req.params.articleId);
  res.json(article);
  } catch(err){
    res.json({message:err});
  }
});


// fannys och mitt försök
// router.get('/articles/:id', async (req, res) => {
//   try {
//       console.log("nu skrivs det")
//     const specificArticle = await Article.findOne({
//     Id: req.params.id,
//   })
//     res.json(specificArticle);
//   } catch(err){
//     res.json({message:err});
//   }
//   });


module.exports = router;