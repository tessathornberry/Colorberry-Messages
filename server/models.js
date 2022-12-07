const db = require('./database/db.js');

module.exports = {
  getUserMessages: (params) => {
    console.log('params', params);
    var requestObject = {};
    if (params._id) {
      requestObject._id = params._id;
    } else if (params.email) {
      requestObject.email = params.email;
      requestObject.password = params.password;
    }
    var results = db.BerryMessage.find(requestObject, {email: 0, password:0});
    return results;
  },
  postUserMessage: async (params) => {
   var results = await db.BerryMessage.create(params);
   console.log('results', results);
   return results;
  }
};