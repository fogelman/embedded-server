const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
  {
    tmp: {
      type: Number
    },
    fan: {
      type: Number
    },
    device: {
      type: Number
    }
  },
  {
    timestamps: true,
    collection: 'log'
  }
);

module.exports = mongoose.model('log', logSchema);
