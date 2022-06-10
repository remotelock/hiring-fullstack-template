#!/usr/bin/env node
const Device = require('./devices/devices.model')

const drop = async () => {
    await Device.drop();
    await Device.sync({ force: true, alter: true })
};

drop();