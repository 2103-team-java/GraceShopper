const router = require('express').Router();
const {
    models: { User, Order, Item },
} = require('../db');
module.exports = router;
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');


router.get('/', requireToken, async (req, res, next) => {
    try {
        // console.log('req.body is ....', req.body)
        // console.log('req.headers is ...', req.headers)
        const orders = await User.findAll({
            attributes: [
                'id', 'username', 'isAdmin'
            ],
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

router.post("/", requireToken, async (req, res, next) => {
  try {

    const addOrder = await Order.create(req.body)

    res.send(addOrder);

  } catch (err) {
    next(err)
  }
})

//for below, requiretoken to force only users
router.put('/', requireToken, async (req, res, next) => {
    try {
        // console.log('req.body is ....', req.body)
        // console.log('req.headers is ...', req.headers)
        const { userId, itemId, quantity } = req.body

        const toUpdate = await Order.findOne({
            where: {
                userId: req.body.userId,
                itemId: req.body.itemId,
            },
        });

        res.send(await toUpdate.update({ userId, itemId, quantity }));

    } catch (error) {
        next(error);
    }
});

// PUT /api/orders/checkout/:orderId
router.put('/checkout/:orderId', requireToken, async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.orderId);
        const update = await order.update({ active: false });
        res.send(order);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:orderToDestroyId', requireToken, async (req, res, next) => {
    try {
      const orderToDestroy = await Order.findByPk(req.params.orderToDestroyId)
      await orderToDestroy.destroy()
      res.json(orderToDestroy)
    } catch (error) {
      next(error)
    }
  })
