import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    saldo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
});

export default User;