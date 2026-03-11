import fs from "fs";             // dependencias para manejar archivos y rutas
import path from "path" 

const logPath = path.join(import.meta.dirname, "..", "logs", "log.txt")

export const newLog = (req, res, next) => { 
        const fecha = new Date().toLocaleString();
        const linea = `[${fecha}] ${req.url} \n`
        fs.appendFile(logPath, linea, "utf-8", (err) => {
        if (err) {console.error("error al escribir en el log: ", err)}})
        next()
    };
