const {Router} = require('express')
const Answer = require('../models/Answer')
// const auth = require('../middleware/auth.middleware')
const router = Router()



// /api/answer
router.post('/answer', async (req,res)=>{
  try {
    const { code, answer_1,answer_2,answer_3,answer_4 } = req.body

    const existing = await Answer.findOne({code})
    if (existing) {
    const answer = new Answer({
      answer_1, answer_2, answer_3, answer_4
    })

    await answer.save()
    res.status(201).json({answer})
    }
  }catch (e) {
    res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  }
})