class Log {
  async store(req, res) {
    console.log(req.body);
    res.send('ok');
  }
}

module.exports = new Log();
