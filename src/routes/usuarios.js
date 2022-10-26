const fs = require('fs/promises');
const path = require('path');
const {Router} = require('express')
const filePath = path.resolve(__dirname, "../../usuarios.json");
console.log(filePath);

const rutaUsuarios = Router()

rutaUsuarios.get("/", async (req, res) => {
  const fileData = await fs.readFile(filePath, "utf-8");
  const usuarios = JSON.parse(fileData);
  res.json({
    data: usuarios,
  });

  // await fs.writeFile(filePath, JSON.stringify(usuarios, null, "\t"))
});

rutaUsuarios.get("/:id", async (req, res) => {
  const id = req.params.id;
  const fileData = await fs.readFile(filePath, "utf-8");
  const usuarios = JSON.parse(fileData);
  const indice = usuarios.findIndex((unUsuario) => unUsuario.id == id);
  if (indice < 0) {
    return res.status(404).json({
      msg: "no existe",
    });
  }
  res.json({
    msg: `devolviendo usuario ${id}`,
    data: usuarios[indice],
  });

  // await fs.writeFile(filePath, JSON.stringify(usuarios, null, "\t"))
});


// Post podemos agregar una palabra nueva
rutaUsuarios.post("/", async (req, res) => {
  const data = req.body;
  console.log(req.body);

  const { nombre, edad, goles } = req.body;

  if (!nombre || !edad || !goles) {
    return res.status(400).json({
      msg: "campos invalidos",
    });
  }

  const nuevoUsuario = {
    nombre,
    edad,
    goles,
  };

  const fileData = await fs.readFile(filePath, "utf-8");
  const usuarios = JSON.parse(fileData);
  usuarios.push(nuevoUsuario);

  await fs.writeFile(filePath, JSON.stringify(usuarios, null, "\t"));
  res.json({
    msg: "ok",
    data: nuevoUsuario,
  });
});

// Con el Put podemos modificar algunas de las palabras
rutaUsuarios.put("/:id", async (req, res) => {
  const id = req.params.id;

  console.log(req.params);

  res.json({
    msg: `modificando ${id}`,
  });
});

// Delete podemos eliminar alguna palabra
rutaUsuarios.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const fileData = await fs.readFile(filePath, "utf-8");
  const usuarios = JSON.parse(fileData);
  const indice = usuarios.findIndex((unUsuario) => unUsuario.id == id);
  if (indice < 0) {
    return res.json({
      msg: "ok",
    });
  }

  usuarios.splice(indice, 1);
  await fs.writeFile(filePath, JSON.stringify(usuarios, null, "\t"));

  res.json({
    msg: `borrado la id numero ${id}`,
  });
});


module.exports = rutaUsuarios;