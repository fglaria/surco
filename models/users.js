var mongoose = require('mongoose');

var User = new mongoose.Schema({
  id: { type: Number, required: true},
  nickname: {type: String, required: true },
  names: { type: String, required: true },
  lastname1: { type: String, required: true },
  lastname2: { type: String, required: true },
  tutor: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: false },
  commune: { type: String, required: false },
  phone: { type: String, required: true },
  roles: [
    [ 
      { type: String, required: true },
      { courses: String, required: false },
      { since: Date, required: true}
    ],
  ],
  created_at : { type: Date, default: Date.now },
  modified_at : { type: Date },
  deleted_at : { type: Date },
  deleted: { type: Boolean, default:false },
});

module.exports = mongoose.model('User', User);
