const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
  {
    tmp: {
      type: Number,
      required: true
    },
    fan: {
      type: Number,
      required: true
    },
    device: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'log'
  }
);

module.exports = mongoose.model('log', logSchema);
