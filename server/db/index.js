//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/user')

const Cart = require('./models/cart')

const Item = require('./models/item')

//Relationships
User.hasOne(Cart)
Cart.belongsTo(User);
Cart.hasMany(Item);
Item.belongsToMany(Cart, {through: 'order' });

module.exports = {
  db,
  models: {
    User,
    Cart,
    Item
  },
}
