const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Device extends Model { }

Device.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    power_source: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    connected_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    firmware_version: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    serial_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    programming_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model_number: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        modelName: 'Device'
    })

module.exports = Device