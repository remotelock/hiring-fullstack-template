const Device = require('./devices.model');
const { Op } = require('sequelize');

async function createDevice(req, res, next) {
    const device = await Device.create(req.body);
    res.send(device.toJSON());
};


async function searchDevice(req, res, next) {
    const { name } = req.query;
    query = name ? { where: { name: { [Op.like]: `%${name}%` } } } : {};
    const devices = await Device.findAll(query);
    res.send(devices);
};

module.exports = {
    createDevice,
    searchDevice,
};
