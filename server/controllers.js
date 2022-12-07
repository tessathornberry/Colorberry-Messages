const models = require('./models.js');

module.exports = {
  //handles get for e-mail/password OR for user code
  getMessages: (req, res) => {
    var params = req.query;
    models.getUserMessages(params)
      .then(results => {
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  },

  postMessage: (req, res) => {
    var params = req.body;
    models.postUserMessage(params)
      .then(results => {
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  }
}