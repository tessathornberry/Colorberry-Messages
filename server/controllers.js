const models = require('./models.js');

module.exports = {
  getMessages: (req, res) => {
    var params = req.params || {};
    models.getUserMessages(params)
      .then(results => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:2999");
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  },

  postMessage: (req, res) => {
    // console.log('req body', req.body);
    var params = req.body || {};
    models.postUserMessage(params)
      .then(results => res.send(results).end())
      .catch(err => res.sendStatus(500).end());
  }
}