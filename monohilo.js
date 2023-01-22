console.log("Hola mundo");

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

  if (i === 5) {
    //Al no estar definida la variable z arrojaria un error,
    //hay que saberlo manejar porque puede parar por completo el proceso del programa
    try {
      let a = i + z;
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  }
}, 1000);

console.log("Segunda instruccion");
