const fs = require("fs");

const leer = (ruta, cb) => {
  fs.readFile(ruta, (err, data) => {
    //Archivo ya esta leido
    cb(data.toString());
  });
};

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) console.error(err);
    console.log("Escrito correctamente");
  });
};

const borrar = (ruta, cb) => {
  fs.unlink(ruta, cb);
};

// leer(__dirname + "/archivo.txt", console.log);
// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
