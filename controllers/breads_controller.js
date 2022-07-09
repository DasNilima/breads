const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.send('No bread found')
  }
  res.send(Bread[req.params.arrayIndex])
})

module.exports = breads
