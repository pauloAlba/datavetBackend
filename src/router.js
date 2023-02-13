import { Router } from "express";
import { 
  insertCliente,
  updateCliente,
  selectClientes,
  selectCliente,
  deleteCliente
 } from "./Controller/controllerCliente.js";

 const router = Router()

router.get("/", (req, res)=>{
  res.send("Trabalhando com rotas")
})

 router.post("/cliente", insertCliente)
 router.put("/cliente", updateCliente)

 router.get("/clientes", selectClientes)
 router.get("/cliente", selectCliente)

 router.delete("/cliente", deleteCliente)

 export default router