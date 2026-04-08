import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const Pelicula = sequelize.define('Pelicula', {
    id_pelicula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'peliculas',
    timestamps: false
});

export default Pelicula;