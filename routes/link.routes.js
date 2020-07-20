const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()


// /api/generate
router.post('/generate', auth, async (req,res)=>{
  try {
    const baseUrl = config.get('baseUrl')
    const {linkForm} = req.body
    // const code = new Date().getTime()
    const code = shortid.generate()

    const existing = await Link.findOne({})
    if (existing) {
      return res.json({ link: existing })
    }

    const linkUrl = baseUrl+'/review/'+code

    const link = new Link({
      client: linkForm.client, project: linkForm.project, code, linkUrl, owner: req.user.userId
    })

    await link.save()
    return res.status(201).json({link})
  }catch (e) {
    return res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  }
})

router.get('/', auth, async (req,res)=>{
  try {
    const links = await Link.find({owner:req.user.userId})
    res.json(links)
  }catch (e) {
    res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  }
})

router.get('/:id', auth, async (req,res)=>{
  try {
    const link = await Link.findById(req.params.id) //????
    res.json(link)
  }catch (e) {
    res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
  }
})

module.exports = router