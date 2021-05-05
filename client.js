const net = require("net");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const connect = function () {
  const conn = net.createConnection({
    host: `localhost`,
    port: 50541,
  });
  conn.setEncoding("utf8");
  console.log("Connected to the game succesfully!");

  conn.on('connect', () => {
    rl.question("Enter a 3 letter initial: ", (initials) => {
      conn.write(`Name: ${initials}`);
      // movements();
    } )
  })

  const movements = () => {
    
  }

  conn.on("data", (data) => {
    console.log(`\n ${data}`);
  });

  return conn;
};

module.exports = { connect }