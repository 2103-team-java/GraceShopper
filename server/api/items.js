const router = require("express").Router();
const { Item, Order } = require("../db/models");


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
