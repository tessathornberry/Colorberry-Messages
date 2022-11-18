const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbName = 'colorberryBasic';
const uri = 'mongodb://127.0.0.1:27017/colorberryBasic';

mongoose.connect(uri, {useNewUrlParser: true});

const colorBasicSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  box1: {type: String, default: 'white'},
  color: {type: String, default: 'white'},
  fontColor: {type: String, default: 'black'},
  messagename: {type: String, required: true},
  message: {type: String, required: true}
});

const BasicMessage = mongoose.model('BasicMessage', colorBasicSchema);
const BerryMessage = mongoose.model('BerryMessage', colorBasicSchema);


const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose error - connection refused');
});

db.once('open', () => {
  console.log('mongoose connected!')
})

module.exports.db = db;

module.exports.BasicMessage = BasicMessage;
module.exports.BerryMessage = BerryMessage;

