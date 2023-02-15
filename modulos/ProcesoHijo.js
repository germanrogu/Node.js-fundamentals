const { exec, spawn } = require("child_process");

//Puedo ejecutar comandos y ejecutar propgramas parate con exec

exec("node modulos/consola.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(stdout);
});

let proceso = spawn("dir", ["-la"]);
console.log(proceso.pid);

proceso.stdout.on("data", function (dato) {
  console.log(dato.toString());
});
