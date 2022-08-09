const { Router } = require('express')
const router = Router()

const User = require('../models/user')

/* router.get('/', (req, res) => res.send('Hello users')) */
router.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
  console.log('hi users')
})

router.post('/', async (req, res) => {
  const { userName,
    category,
    email,
    telefon,
    imageUser,
    aboutYou
  } = req.body
  const newUser = new User({
    userName,
    category,
    email,
    telefon,
    imageUser,
    aboutYou
  })
  await newUser.save() 
  res.json({ message: 'User save' })
  console.log(newUser)
})

router.delete('/:id', async (req, res) => {
  /* console.log(req.params.id) */
  const user = await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'User deleted' })
})

module.exports = router