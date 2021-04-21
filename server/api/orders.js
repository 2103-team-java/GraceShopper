const router = require('express').Router()
const { Order } = require('../db')
const { Item } = require('../db')
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // console.log('hello')
    const orders = await User.findAll({
      include: [
      {
        model: Item,
        //attributes: [['brand', 'price', 'price']],
        required: true
      },
      // {
      //   model: User,
      //   attributes: [['username']]
      // },
    ]}
      )
    res.json(orders)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:singleuser', async (req, res, next) => {
    try {
      // console.log('hello')
      const userFilter = req.params.singleuser
      const orders = await User.findOne({
        where: {
          username: userFilter
        },
        include: [
        {
          model: Item,
          //attributes: [['brand', 'price', 'price']],
          required: true
        },
        // {
        //   model: User,
        //   attributes: [['username']]
        // },
      ]}
        )
      res.json(orders)
    }
    catch (error) {
      next(error)
    }
  })

//get route for all orders

// get route for one person (e.g. to see one person's cart)
// get/orders/id

// post route to create an order ....

// put route for updating quantity based on user id/item id ...


