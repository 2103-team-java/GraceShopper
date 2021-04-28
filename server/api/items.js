const router = require("express").Router();
const Item = require("../db/models/item");
const Order = require("../db/models/order");
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

router.get('/', async (req, res, next) => {
    try {
      const allWatches = await Item.findAll();
      res.json(allWatches);
    } catch (error) {
      next(error);
    }
  })


router.get("/:id", async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.id)
    res.json(singleItem)
  } catch (err) {
    next(err)
  }
})

//update watch for admin
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
      // const updateObj = req.body
      const toUpdate = await Item.findByPk(req.params.id)
      res.send(await toUpdate.update(req.body));
  } catch (error) {
      next(error);
  }
});

//add watch for admin

router.post("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const addItem = await Item.create(req.body)
    res.send(addItem);
  } catch (err) {
    next(err)
  }
})

//delete watch for admin
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const itemToDestroy = await Item.findByPk(req.params.id)
    await itemToDestroy.destroy()
    res.json(itemToDestroy)
  } catch (error) {
    next(error)
  }
})

module.exports = router;


