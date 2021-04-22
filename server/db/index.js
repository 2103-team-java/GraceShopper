//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/user')

// const Cart = require('./models/cart')

const Item = require('./models/item')

const Order = require('./models/order')

//Relationships
// User.hasOne(Cart)
// Cart.belongsTo(User);
// Cart.hasMany(Item);
// Item.belongsToMany(Cart, {through: 'order' });


User.belongsToMany(Item, {
  through: Order
})
Item.belongsToMany(User, {
  through: Order
})
// Item.belongsTo(Order)


module.exports = {
  db,
  User,
  Item,
  Order,
  models: {
    User,
  //   // Cart,
  //   Item,
  //   Order
  },
}

//super many to many table

// if relationship DNE { create ...}
// if relationship exists { udpate w/ quantity ++ }
