import { openDb } from "./configDB.js";


// INSERIR DADOS
export async function insertCliente(req, res) {
  let cliente = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO Clientes (nomeTutor, cpf, telefone, endereco, indicacao, nomePaciente, expecie, raca, dataNascimento, castrado, clinicoResponsavel, telefoneClinco) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        cliente.nomeTutor,
        cliente.cpf,
        cliente.telefone,
        cliente.endereco,
        cliente.indicacao,
        cliente.nomePaciente,
        cliente.especie,
        cliente.raca,
        cliente.dataNascimento,
        cliente.castrado,
        cliente.clinicoResponsavel,
        cliente.telefoneClinico,
      ]);
  });
  res.json({
    statusCode: 200,
  });
}

// ATUALIZAR DADOS
export async function updateCliente(req, res){
  let cliente = req.body
  openDb().then((db)=>{
    db.run("UPDATE Clientes SET nomeTutor=?, cpf=?, telefone=?, endereco=?, indicacao=?, nomePaciente=?, expecie=?, raca=?, dataNascimento=?, castrado=?, clinicoResponsavel=?, telefoneClinco=? WHERE id=?",[
        cliente.nomeTutor,
        cliente.cpf,
        cliente.telefone,
        cliente.endereco,
        cliente.indicacao,
        cliente.nomePaciente,
        cliente.especie,
        cliente.raca,
        cliente.dataNascimento,
        cliente.castrado,
        cliente.clinicoResponsavel,
        cliente.telefoneClinico,
        cliente.id
    ])
  })
  res.json({
    "statusCode": 200
  })
}

// PEGAR TODOS OS DADOS
export async function selectClientes(req, res){
  openDb().then((db)=>{
    db.all("SELECT * FROM Clientes")
    .then((clientes) => res.json(clientes))
  })
}

// PEGAR UM ÚNICO DADO
export async function selectCliente(req, res){
  let id = req.query.id // req.query.id
  openDb().then((db)=>{
    db.get("SELECT * FROM Clientes WHERE id=?", [id])
    .then((cliente) => res.json(cliente))
  })
}

// DELETAR CLIENTE
export async function deleteCliente(req, res){
  let id = req.body.id
  openDb().then((db)=>{
    db.get("DELETE FROM Clientes WHERE id=?", [id])
  })
  res.json({
    "statusCode": 200
  })
}