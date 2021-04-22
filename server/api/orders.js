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
        required: true
      },
    ]}
      )
    res.json(orders)
  }
  catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    console.log('req.body is....', req.body)
    const toUpdate = await Order.findOne({
      where: {
        userId: req.body.userId,
        itemId: req.body.itemId,
      }
    });
    console.log(toUpdate)
    res.send(await toUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});


//get route for all orders

// get route for one person (e.g. to see one person's cart)
// get/orders/id

// post route to create an order ....

// put route for updating quantity based on user id/item id ...


