const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
    orderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allownull: false,
        defaultValue: 1,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

module.exports = Order;
