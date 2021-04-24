const router = require('express').Router();
const {
    models: { User, Order, Item },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const orders = await User.findAll({
            include: [
                {
                    model: Item,
                    required: true,
                },
            ],
        });
        res.json(orders);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
  try {
    const addCart = await Order.create(req.body)
    res.status(201).json(addCart)
  } catch (err) {
    next(err)
  }
})


router.put('/', async (req, res, next) => {
    try {

        const toUpdate = await Order.findOne({
            where: {
                userId: req.body.userId,
                itemId: req.body.itemId,
            },
        });
        console.log('req.body is---->', req.body);
        console.log("toUpdate", toUpdate);
        res.send(await toUpdate.update(req.body));

    } catch (error) {
        next(error);
    }
});

// PUT /api/orders/checkout/:orderId
router.put('/checkout/:orderId', async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.orderId);
        const update = await order.update({ active: false });
        res.send(order);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:orderToDestroyId', async (req, res, next) => {
    try {
      const orderToDestroy = await Order.findByPk(req.params.orderToDestroyId)
      await orderToDestroy.destroy()
      res.json(orderToDestroy)
    } catch (error) {
      next(error)
    }
  })
