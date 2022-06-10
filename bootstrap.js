#!/usr/bin/env node
const Device = require('./devices/devices.model')
const devices = require('./devices.json');

const migrate = async () => {
    await Device.sync({ force: true, alter: true });
    for (device of devices.data) {
        Device.create({ ...device.attributes, id: device.id })
    }
};


migrate();