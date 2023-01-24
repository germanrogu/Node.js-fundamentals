function saludo(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log(`Bla bla bla `);
    callbackHablar();
  }, 1000);
}

function adios(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    miCallback();
  }, 1000);
}

// ------------------------------------------------- //
console.log("Iniciando...");
saludo("German").then((nombre) => {
  console.log("Terminando...");
});
