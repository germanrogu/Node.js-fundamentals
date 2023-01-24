function saludo(nombre, miCallback) {
  //La asincronia se puede generar mediante en setTimeout
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    miCallback(nombre);
  }, 1000);
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

//Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.

// ------------------------------------------------- //
// console.log("Iniciando...");
// saludo("german", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log("Terminando...");
//       });
//     });
//   });
// });

//-------------------------------------------------//
//Como corregir el callback hell de asincronia

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando...");
saludo("German", function (nombre) {
  conversacion(nombre, 4, function () {
    console.log("Terminando...");
  });
});
