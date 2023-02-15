async function saludo(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bla bla bla `);
      resolve(nombre);
      //reject("Hay un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await saludo("German");
  await hablar();
  await hablar();
  await adios(nombre);
}

main();
