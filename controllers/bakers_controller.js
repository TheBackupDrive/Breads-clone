const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed')

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// Index
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})   

// Show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
           path: 'breads',
           options: {limit: 4}
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// Delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})

module.exports = baker                  
