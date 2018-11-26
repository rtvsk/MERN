const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); deprecated

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware deprecated -> use express.json() instead
// app.use(bodyParser.json());
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}...`));