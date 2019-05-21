const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const databaseConfig = require('./config/database');

class App {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose
      .connect(process.env.MONGO_URI || databaseConfig.uri, {
        useCreateIndex: true,
        useNewUrlParser: true
      })
      .catch(err => console.log(err));
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());

    this.express.use(express.static(path.join(__dirname, 'public')));
  }
  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new App();
