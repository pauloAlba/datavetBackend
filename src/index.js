import express from "express";
import router from "./router.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use(router)

const port = "443"

app.get("/", (req, res) => {
  res.send("olá, mundo!");
});

app.set("port", process.env.PORT || 3000)

app.listen("3000", () => console.log("servidor rodando"));
