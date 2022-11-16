const models = require('./models.js');

module.exports = {
  getMessages: (req, res) => {
    // console.log('req', req);
    var params = req.query || {};
    models.getUserMessages(params)
      .then(results => {
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  },

  postMessage: (req, res) => {
    console.log('req body', req.body);
    var params = req.body || {};
    models.postUserMessage(params)
      .then(results => {
        res.send(results).end();})
      .catch(err => res.sendStatus(500).end());
  }
}