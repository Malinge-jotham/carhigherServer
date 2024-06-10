// models/GymMembership.js
module.exports = (sequelize, DataTypes) => {

    const Customers = sequelize.define('Customers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
       
    });
    return Customers
    }