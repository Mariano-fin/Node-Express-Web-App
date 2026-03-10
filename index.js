import express from "express";
import "dotenv/config";

const app = express();                      

const PORT = process.env.PORT || 3000       // El puerto será el definido en .env o 3000


app.get("/", (req, res) => {
    res.send("<h1>Sistema de gestión de usuarios</h1>")
})

app.get("/status", (req, res) => {
    res.json({ status : "ok" })
})

app.listen(PORT, () => {                    
  console.log("Servidor iniciado")
})
