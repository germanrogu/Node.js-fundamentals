function seRompe() {
  return 3 + z;
}

function Asincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi funcion asincrona");
      cb(err);
    }
  });
}

try {
  //   seRompe();
  Asincrona((err) => {
    console.log(err);
  });
} catch (err) {
  console.error(err.message);
}

console.log("Puedo seguir");
