let suma = 0;

console.time("bucle");
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle2");
for (let i = 0; i < 1000000000; i++) {
  suma2 += 1;
}
console.timeEnd("bucle2");

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("termina el proceso ");
      resolve();
    }, 1000);
  });
}

console.time("Asincrona");
asincrona().then(() => console.timeEnd("Asincrona"));
