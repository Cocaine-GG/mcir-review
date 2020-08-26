const  {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  code: String,
  question_1: String,
  question_2: String,
  question_3: String,
  question_4: String,
  refuseAvis: String,
  linkId: {type: Types.ObjectId, ref: 'Link'}

})

module.exports = model('Answer', schema)