
const router = require('express').Router();
const {
  models: { Order },
} = require('../db');
module.exports = router;
// get route for all orders ...


// get route for one person (e.g. to see one person's cart)
// get/orders/id

// post route to create an order ....

// put route for updating quantity based on user id/item id ...


// put routes to change the active status of an order

router.put('/checkout/:orderId', (req,res,next)=>{
  try {
    const order = await Order.findByPk(orderId)
    const update = await order.update({"active": false})
    res.send(update)
  } catch (error) {
    console.log(error)
  }
})