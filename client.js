const net = require("net");
const readline = require('readline');
const {PORT, IP} = require('./constants');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  console.log("Connected to the game succesfully!");

  conn.on('connect', () => {
    rl.question("Enter a 3 letter initial: ", (initials) => {
      conn.write(`Name: ${initials}`);
    } )
  })

  conn.on("data", (data) => {
    console.log(`\n ${data}`);
  });

  return conn;
};

module.exports = { connect }