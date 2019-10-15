var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/goods', { useMongoClient: true })

var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tel :{
      type:Number,
      require:true
  },
  QQ :{
      type:String
  },
  age :{
      type:Number,
      default:20
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },

});

module.exports = mongoose.model('User', userSchema)