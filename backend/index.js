console.clear();

const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const cluster = require('cluster');
require('colors');
require('dotenv').config();

app = express();

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log('Node NOT Exiting...');
});

db.connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/teachers', require('./routes/teacherRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`.dim.bold)
);
