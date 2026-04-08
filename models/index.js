import User from './User.js';
import Pelicula from './Pelicula.js';

User.hasMany(Pelicula, { foreignKey: 'id_user' });
Pelicula.belongsTo(User, { foreignKey: 'id_user' });

export { User, Pelicula };