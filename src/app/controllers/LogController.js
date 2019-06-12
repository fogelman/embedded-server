const Log = require('../models/Log');

class Logger {
  async store(req, res) {
    var { tmp, fan, device, timestamp } = req.body;
    if (
      tmp != undefined &&
      fan != undefined &&
      device != undefined &&
      timestamp != undefined
    ) {
      const log = await Log.create({ tmp, fan, device, timestamp });
      return res.json(log);
    }
    console.log();
    return res.status(301).send(` error on request`);
  }

  async show(req, res) {
    const log = await Log.find({});
    return res.status(200).json(log);
  }

  async delete(req, res) {
    const log = await Log.deleteMany({});
    return res.status(200).json(log);
  }

  // async assa(req, res) {
  //   const log = await Log.drop({});
  //   return res.status(200).json(log);
  // }
}

module.exports = new Logger();
