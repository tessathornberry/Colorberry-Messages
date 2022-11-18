const models = require('./models.js');

module.exports = {
  getMessages: (req, res) => {
    var params = req.query;
    models.getUserMessages(params)
      .then(results => {
        //cut out e-mail and password - see if those can be stored in state instead
        // delete results[0]._id;
        delete results[0].email;
        delete results[0].password;
        delete results[0].codeString;



        console.log('results', results[0])
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