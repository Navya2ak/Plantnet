const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  userType: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = model('user', schema);
