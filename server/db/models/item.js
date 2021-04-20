const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
    name: {
      type: Sequelize.STRING,
      allownull: false,
    },
    brand: {
        type: Sequelize.STRING,
        allownull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allownull: false,
    },
    decription: {
        type: Sequelize.TEXT,
        allownull: false,
    },
    ImageURL: {
        type: Sequelize.TEXT,
        allownull: false,
    }
  })

  module.exports = Item;