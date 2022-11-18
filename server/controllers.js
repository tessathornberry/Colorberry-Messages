const models = require('./models.js');

module.exports = {
  getMessages: (req, res) => {
    var params = req.query;
    models.getUserMessages(params)
      .then(results => {
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  },
  //make another function to handle get for string with codeString.
  postMessage: (req, res) => {
    var params = req.body;
    models.postUserMessage(params)
      .then(results => {
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  }
}