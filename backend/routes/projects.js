const { Router } = require('express')
const router = Router()

const project = require('../models/project')

router.get('/', async (req, res) => {
  const projects = await project.find()
  res.json(projects)
}) 


module.exports = router