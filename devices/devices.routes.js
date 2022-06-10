const router = require('express').Router();

const controller = require('./devices.controller');

router.post('/', controller.createDevice);
router.get('/', controller.searchDevice);


function register(app) {
    app.use("/device", router);
}
module.exports = register;
