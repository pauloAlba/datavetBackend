import express from "express";
import router from "./router.js";
import cors from "cors"
import https from "https"
import fs from "fs"

const app = express();
app.use(express.json());
app.use(cors())
app.use(router)

const port = "443"

app.set('port', process.env.PORT || 3000);


https.createServer({
  cert: fs.readFileSync("src/SSL/code.crt"),
  key: fs.readFileSync("src/SSL/code.key")
}, app).listen(port, () => console.log("Rodando em https"))

