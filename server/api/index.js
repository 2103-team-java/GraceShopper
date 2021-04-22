const router = require('express').Router()

// router.use('/users', require('./users'))
<<<<<<< HEAD
router.use('/orders', require('./orders'))
// router.use('/items', require('./items'))
=======
// router.use('/orders', require('./orders'))

router.use('/items', require('./items'))
>>>>>>> 3b58df0e7bceada2c3945e0249967e0f342c8774

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
