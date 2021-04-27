const router = require('express').Router();
const {
    models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
//requireToken
router.get('/', async (req, res, next) => {
// router.get('/', requireToken, async (req, res, next) => {
    try {

        const users = await User.findAll({
            // explicitly select only the id and username fields - even though
            // users' passwords are encrypted, it won't help if we just
            // send everything to anyone who asks!
            attributes: ['id', 'username'],
        });
        res.json(users);
    } catch (err) {
        next(err);
    }
});

//routes to update the shipping address of users

router.put('/checkout/:id', requireToken, async (req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        const update = await user.update(req.body);
        res.send(update);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
