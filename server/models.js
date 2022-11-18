// const express  = require('express');
// const BasicMessage = require('./database/db.js');
// const BerryMessage = require('./database/db.js');
// const crypto = require('crypto');
const db = require('./database/db.js');

module.exports = {
  getUserMessages: (params) => {
    var results = db.BerryMessage.find(params, {email: 0, password:0});
    return results;
  },


  postUserMessage: async (params) => {
    // creates a random code number(though I could simply use the id?)
  // var randomEight = new Int8Array(8);
  // var randomizedObject = crypto.randomBytes(randomEight.length);
  // var randomValues = Object.values(randomizedObject);
  // var joined = randomValues.join('');

  // params.codeString = joined;

   var results = await db.BerryMessage.create(params);
   console.log('results', results);

   return results;

  }
};