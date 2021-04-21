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
        defaultValue: 'http://static1.squarespace.com/static/56e854d21d07c037ee342a2e/5f39caca62c23339b58b1a8f/5ae65a2a2b6a28c1082d8087/1614627716345/Daytona+rainbow.jpg?format=1500w'
    }
  })

  module.exports = Item;