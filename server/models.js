const express  = require('express');
const BasicMessage = require('./database/db.js');
const db = require('./database/db.js');



module.exports = {
  getUserMessages: (params) => {
    var results = db.BasicMessage.find(params);
    // console.log(results);
    return results;
  },
  postUserMessage: async (params) => {
   var results = await db.BasicMessage.create(params);
   return results;

  }
};