//Crear o conectarnos a un servidor externo directmante desde nodejs
const http = require("http");
//Crear servidor basico
http
  .createServer(router) //El servidor tiene que escuchar en algun puerto
  .listen(3000);

const router = (request, response) => {
  console.log("Nueva peticion", request.url);

  switch (request.url) {
    case "/hola":
      response.write("Hola que tal");
      request.end();
      break;

    default:
      response.write("Error 404 no se que quieres");
      request.end();
      break;
  }
  //   response.writeHead(201, { "Content-Type": "text/plain" });
  //   //Escribir Respuesta al usuario
  //   response.write("Ya se usar HTTP de Nodejs");
  //   request.end();
};

console.log("Escuchando http en el puerto 3000");
