const os = require("os");

console.log(os.arch());

console.log(os.platform());

console.log(os.cpus().length);

console.log(os.constants);

const SIZE = 1024;
function kbytes(bytes) {
  return bytes / SIZE;
}
function mbytes(bytes) {
  return kbytes(bytes) / SIZE;
}
function gbytes(bytes) {
  return mbytes(bytes) / SIZE;
}

console.log(kbytes(os.freemem()));
console.log(mbytes(os.freemem()));
console.log(gbytes(os.freemem()));

console.log(gbytes(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());
