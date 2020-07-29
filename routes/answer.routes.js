const {Router} = require('express')
const router = Router()
const Answer = require('../models/Answer')


// /api/review
router.post('/answer',async (req,res)=>{
  try {
    const code = req.body[0]
    const question_1 = req.body[1]
    const question_2 = req.body[2]
    const question_3 = req.body[3]
    const question_4 = req.body[4]

    const existing = await Answer.findOne({code})
    if (existing) {
      return res.json({ answer: existing }) //Change message -> Answer deja exist
    }

    const answer = new Answer({code, question_1,question_2,question_3,question_4})

      await answer.save()
      res.status(201).json({answer})
  }catch (e) {
    res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  }
})

router.get('/:id', async (req,res)=>{
  try {
    const links = await Answer.find({code:req.params.id})
    res.json(links)
  }catch (e) {
    res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  }
})

module.exports = router