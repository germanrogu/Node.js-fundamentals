let i = 0;
let interval = setInterval(() => {
  console.log("Hola");
  i === 3 && clearInterval(interval);
  i++;
}, 1000);
