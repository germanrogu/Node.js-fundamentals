function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

asincrona(function (err, dato) {
  if (err) {
    console.error(err);
    //throw err;
    return false;
  }

  console.log("Todo bien ", dato);
});
