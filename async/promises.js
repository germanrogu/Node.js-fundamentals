function saludo(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bla bla bla `);
      // resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

// ------------------------------------------------- //
console.log("Iniciando...");
saludo("German")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminando...");
  })
  .catch((error) => {
    console.error(error);
  });
