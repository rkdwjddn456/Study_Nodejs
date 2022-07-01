const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyPaser = require('body-parser');

const app = express()
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const port = 4000;
app.listen(port, () => {
    console.log("Server listening on port", port)
})

app.use('/api/movie',require('./routes/movieRouter'));