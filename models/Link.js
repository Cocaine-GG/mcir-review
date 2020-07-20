const  {Schema, model, Types} = require('mongoose')

const link = new Schema({
  client: {type:String, require:true},
  project: {type:String, require:true},
  linkUrl: {type: String, require: true,unique: true},
  code: {type: String, require: true, unique: true},
  date: {type: Date, default: Date.now},
  // clicks: {type:Number, default:0},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Link', link)