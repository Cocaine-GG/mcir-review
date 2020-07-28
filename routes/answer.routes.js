const {Router} = require('express')
const router = Router()
const Answer = require('../models/Answer')
const Link = require('../models/Answer')


// /api/review
router.post('/answer',async (req,res)=>{
  console.log(req.body)
  // try {
  //   const {rating, code} = req.body
  //
  //   const answer = new Answer({question_1 : rating})
  //
  //     await answer.save()
  //     res.status(201).json({answer})
  // }catch (e) {
  //   res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  // }
})

module.exports = router