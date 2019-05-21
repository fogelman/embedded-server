const Log = require('../models/Log');

class Logger {
  async store(req, res) {
    var { tmp, fan, device } = req.query;
    if (tmp && fan && device) {
      const log = await Log.create({ tmp, fan, device });
      return res.json(log);
    }
    return res.status(301).send('error');
  }

  async show(req, res) {
    const log = await Log.find({});
    return res.status(200).json(log);
  }

  // async assa(req, res) {
  //   const log = await Log.drop({});
  //   return res.status(200).json(log);
  // }
}

module.exports = new Logger();
