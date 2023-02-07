import express from "express";
import router from "./router.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use(router)

const port = "443"

app.set('port', process.env.PORT || 3000);
app.listen(3000, ()=> console.log("Api Rodando."))

