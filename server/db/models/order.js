const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    quantity: {
      type: Sequelize.INTEGER,
      allownull: false,
      defaultValue: 1
    },
    // itemID: {
    //     type: Sequelize.INTEGER,
    //     allownull: false,
    // },
    // userID: {
    //   type: Sequelize.
    // }
  })

  module.exports = Order;
