const {
    models: { User },
} = require('../db');
// const User = require('../db/models/user');

const requireToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // console.log('requiretoken token is ...', token)
        const user = await User.findByToken(token); //
        req.user = user;
        //console.log(req.user)
        next();
    } catch (error) {
        next(error);
    }
};

const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).send('Permission denied');
    } else {
        next();
    }
};

module.exports = {
    requireToken,
    isAdmin,
};
