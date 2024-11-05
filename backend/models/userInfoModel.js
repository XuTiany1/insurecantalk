const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userInfoSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  userEmail: {
    type: String,
    required: false  
  },
  question1: {
    type: String,
    required: false  
  }
});



module.exports = mongoose.model("userInfo", userInfoSchema)