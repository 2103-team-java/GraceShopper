const router = require('express').Router()
const Item = require('../db/models/item');
router.get('/', async (req, res, next) => {
    console.log('hello');
    try {
      const allWatches = await Item.findAll();
      res.send(allWatches);
    } catch (error) {
      next(error);
    }
  })

  module.exports = router