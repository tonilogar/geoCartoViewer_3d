const { Router } = require('express')
const router = Router()

const background = require('../models/background')

router.get('/', async (req, res) => {
  const backgrounds = await background.find()
  res.json(backgrounds)
}) 

router.get('/:id', async (req, res) => {
  const backgrounds = await background.findById(req.params.id)
  res.json(backgrounds)
})
 

router.post('/', async (req, res) => {
  const { 
    titleBackground,
    dataBackground
  } = req.body
  const newBackground = new Background({
    titleBackground,
    dataBackground
  })
  await newBackground.save()
  res.json({message: 'background save'})
  console.log(newBackground)
})

router.delete('/:id', async (req, res) => {
  /* console.log(req.params.id) */
  const user = await Background.findByIdAndDelete(req.params.id)
  res.json({ message: 'background deleted' })
})

module.exports = router