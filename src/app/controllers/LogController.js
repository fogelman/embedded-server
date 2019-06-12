const Log = require('../models/Log');

class Logger {
  async store(req, res) {
    var { tmp, fan, device } = req.body;
    if (tmp && fan && device && timestamp) {
      const log = await Log.create({ tmp, fan, device, timestamp });
      return res.json(log);
    }
    return res.status(301).send('error');
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
