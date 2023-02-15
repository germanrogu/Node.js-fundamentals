function saludo(nombre, miCallback) {
  //La asincronia se puede generar mediante en setTimeout
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    miCallback();
  }, 1000);
}

//Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.

console.log("Iniciando...");
saludo("german", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando...");
  });
});
