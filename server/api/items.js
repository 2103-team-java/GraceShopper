const router = require("express").Router();
const Item = require("../db/models/item");
const Order = require("../db/models/order");

router.get("/:id", async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.id, {
      include: [Order]
    })
    res.json(singleItem)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
