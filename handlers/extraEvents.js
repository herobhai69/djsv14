const boxConsole = require('box-console');
module.exports = async (client) => {
let aio = `Welcome to ${'Control Room'.bold.blue} of ${'BoltWays - BOT'.red}`;
let aio_server = `Support:- ${`https://discord.gg/boltgw`.brightGreen}`
let Uo = `Coded By ${`HERO#2592`.brightCyan.bold}`;
 console.clear()
  boxConsole([aio, aio_server, Uo]);
  // Console Logger
  client.logger = (data) => {
    var currentdate = new Date();
    let logstring = ` ${`${`${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`.brightBlue.bold} ${`│`.brightMagenta.bold}`
                     }`
    if (typeof data == "string") {
      console.log(logstring, data.split("\n").map(d => `${d}`.green).join(`\n${logstring} `))
    } else if (typeof data == "object") {
      console.log(logstring, JSON.stringify(data, null, 3).green)
    } else if (typeof data == "boolean") {
      console.log(logstring, String(data).cyan)
    } else {
      console.log(logstring, data)
    }
  };
  
}