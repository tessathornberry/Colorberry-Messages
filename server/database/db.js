const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbName = 'colorberryBasic';
const uri = 'mongodb://127.0.0.1:27017/colorberryBasic';

mongoose.connect(uri, {useNewUrlParser: true});

const colorBasicSchema = new Schema({
  email: {type: String, required: true},
  color: {type: String, default: 'white'},
  fontColor: {type: String, default: 'black'},
  messagename: {type: String, required: true},
  message: {type: String, required: true}
});

const BasicMessage = mongoose.model('BasicMessage', colorBasicSchema);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose error - connection refused');
});

db.once('open', () => {
  console.log('mongoose connected!')
})

module.exports.db = db;
module.exports.BasicMessage = BasicMessage;
