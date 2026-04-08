## Requisitos del sistema 
- Git
- Node v18 o superior
- PostgreSQL


## Instrucciones de instalación
1. Clonar repositorio desde Github: https://github.com/Mariano-fin/Node-Express-Web-App
2. Desde la carpeta del proyecto, ejecutar "npm install"
3. Crear un archivo .env basado en .env.example con las credenciales de PostgreSQL
4. Ejecutar npm run dev


## Scripts

Se cuenta con dos scripts: "start" y "dev", siendo el segundo el utilizado para el desarrollo al funcionar con Nodemon, mientras que el primero se puede utilizar en la implementación, al no requerir Nodemon. Para usarlos, basta con ejecutar "npm run start" o "npm run dev".


## Ejemplos de uso: Rutas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | / | Página principal |
| GET | /status | Estado del servidor |
| GET | /usuarios | Lista de usuarios (id y nombre) |
| GET | /usuarios/orm | Lista de usuarios usando Sequelize ORM |
| GET | /usuarios/peliculas | Lista de usuarios con sus películas |
| POST | /usuarios | Crear usuario con log de transacción |
| PUT | /usuarios/:id | Actualizar nombre de un usuario |
| DELETE | /usuarios/:id | Eliminar un usuario |


### Tecnologías
- JavaScript
- Node.js
- Express
- PostgreSQL
- Sequelize ORM


### Notas

Se utilizará "index" como nombre de archivo js principal en vez de "app", debido a la sinergia nativa que posee con Node, que buscará por defecto el archivo "index.js" a no ser que otro sea especificado.

La conexión a la base de datos se gestiona mediante un Pool de conexiones (pg) para las consultas SQL directas, y Sequelize para el manejo de modelos y relaciones.

Otros registros del avance del trabajo se adjuntan en la siguiente carpeta: https://drive.google.com/drive/folders/1C7aP2Ni7IPqmaPtOMJEu1GzEKmsok8G7?usp=drive_link