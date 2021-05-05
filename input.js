let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Exiting game!");
    process.exit();
  }

  if (key === `w`){
    connection.write(`Move: up`);
  }
  if (key === `a`){
    connection.write(`Move: left`);
  }
  if (key === `s`){
    connection.write(`Move: down`);
  }
  if (key === `d`){
    connection.write(`Move: right`);
  }

  if (key === `1`){
    connection.write(`Say: Almost had it!`)
  }
  if (key === `2`){
    connection.write(`Say: Got it!`)
  }
  if (key === `3`){
    connection.write(`Say: NOOOO`)
  }

};

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};