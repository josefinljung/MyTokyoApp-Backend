const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const allarticles = require('./routes/articles');

app.use('/articles', allarticles)

//Routes
app.get('/', (req, res) => {
  res.send();
});

//Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECTION, 
  {useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('Connected to MongoDB!')
);

app.listen(8000);