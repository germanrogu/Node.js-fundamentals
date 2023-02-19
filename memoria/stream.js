const { Transform } = require("stream");
const { createReadStream } = require("fs");

let data = "";

let readbleStream = createReadStream(__dirname + "/input.txt");
readbleStream.setEncoding("UTF8");
readbleStream.on("data", function (chunk) {
  data += chunk;
});
readbleStream.on("end", function () {
  //   console.log(data);
});

// process.stdout.write("hola");
// process.stdout.write("que");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const readableStream = createReadStream(__dirname + "/input.txt");

readableStream.pipe(upperCaseTransform).pipe(process.stdout);
