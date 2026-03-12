**Requisitos del sistema**
- Git
- Node v18 o superior


**Dependencias requeridas:**
- Express
- dotenv


**Instrucciones de instalación**
1. Clonar repositorio desde Github: https://github.com/Mariano-fin/Node-Express-Web-App
2. Instalar Node
3. Instalar "express" y "dotenv"
4. Ejecutar los scripts: npm run start, y npm run dev (requiere nodemon)

**devDependencies**
- Nodemon


**Scripts**

Se cuenta con dos scripts: "start" y "dev", siendo el segundo el utilizado para el desarrollo al funcionar con Nodemon, mientras que el primero se puede utilizar en la implementación, al no requerir Nodemon. Para usarlos, 


**Ejemplos de uso: Rutas**

Se crean dos rutas principales: "/" y "/status". La primera recibirá una respuesta en HTML, ya que es la página que verá el usuario/cliente, mientras que "status" será utilizada principalmente por devs para revisar el estado del servidor.


*** Stacks ***
- JavaScript
- Node.js
- Express


**Notas**

Se utilizará "index" como nombre de archivo js principal en vez de "app", debido a la sinergia nativa que posee con Node, que buscará por defecto el archivo "index.js" a no ser que otro sea especificado.

