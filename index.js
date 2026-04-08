import express from "express";
import "dotenv/config";
import { newLog } from "./middlewares/logger.js";
import router from "./routes/index.js";
import "./db/db.js";
import "./models/index.js";

const app = express();                      
const PORT = process.env.PORT || 3000       // El puerto será el definido en .env o 3000

app.use(express.static("public"))

app.use(newLog)

app.use(express.json())

app.use(router)

app.listen(PORT, () => {                    
  console.log("Servidor iniciado")
})
