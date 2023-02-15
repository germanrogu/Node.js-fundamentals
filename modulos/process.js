process.on("beforeExit", () => {
  console.log("Proceso Casi termina");
});

process.on("exit", () => {
  console.log("Proceso termino");
});

process.on("uncaughtException", (err, origin) => {
  console.log("uncaughtException", err, origin);
});

process.on("uncaughtException", () => {
  console.log("uncaughtException");
});
