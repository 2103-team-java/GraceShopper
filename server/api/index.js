const router = require('express').Router()

// router.use('/users', require('./users'))
router.use('/orders', require('./orders'))
// router.use('/items', require('./items'))
// router.use('/orders', require('./orders'))
router.use('/items', require('./items'))

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
