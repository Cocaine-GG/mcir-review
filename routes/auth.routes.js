const {Router: Router} = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/register
router.post(
  '/register',
  [
    check('email','Email invalide').isEmail(),
    check('password', 'Longueur minimale du mot de passe 6 caractères' )
    .isLength({ min:6 })
  ],
  async (req,res)=>{
    try {
      const  errors = validationResult(req)

      if(!errors.isEmpty()) {
        return  res.status(400).json({
          errors: errors.array(),
          message: 'Données d\'enregistrement incorrectes'
        })
      }

      const {email, password} = req.body

      const candidate = await User.findOne({ email })

      if(candidate) {
        res.status(400).json({message:'Cet utilisateur existe déjà'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'L\'utilisateur a été créé avec succès'})

    }catch (e) {
      res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
    }
  })

// /api/login
router.post('/login',
  [
    check('email','Entrez les données correctes').normalizeEmail().isEmail(),
    check('password', 'Entrez les données correctes').exists()
  ],
  async (req,res)=>{
    try {
      const  errors = validationResult(req)

      if(!errors.isEmpty()) {
        return  res.status(400).json({
          errors: errors.array(),
          message: 'Détails de connexion incorrects'
        })
      }

      const  {email, password} = req.body

      const  user = await User.findOne({ email })

      if (!user) {
        return  res.status(400).json({ message: 'L\'utilisateur est introuvable'})
      }

      const  isMatch = await bcrypt.compare(password, user.password)

      if(!isMatch) {
        return  res.status(400).json({ message: 'Mot de passe incorrect'})
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })

    }catch (e) {
      res.status(500).json({message:'Une erreur s\'est produite, réessayez plus tard'})
    }
  })

module.exports = router