const { version } = require(`discord.js`)
const client = require('..')
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setBorder('│', '─', "✥", "✥");
table.setTitle(`Bot is online!`)
client.on("ready", () => {
  console.log("Wee! i am logged")
  const activities = [
    { name: `${client.guilds.cache.size} Servers`, type: 2 }, // LISTENING
    { name: `${client.channels.cache.size} Channels`, type: 0 }, // PLAYING
    { name: `${client.users.cache.size} Users`, type: 3 }, // WATCHING
    { name: `BoltWays - Official BOLT BOT`, type: 5 } // COMPETING
  ];
  const status = [
    'online',
    'dnd',
    'idle'
  ];
  let i = 0;
  setInterval(() => {
    if (i >= activities.length) i = 0
    client.user.setActivity(activities[i])
    i++;
  }, 5000);

  let s = 0;
  setInterval(() => {
    if (s >= activities.length) s = 0
    client.user.setStatus(status[s])
    s++;
  }, 30000);
  setTimeout(() => {
    client.logger((`Logged in as ${client.user.tag}!`).cyan.bold)
  }, 2000)
  // Rows
  table
    .addRow(`Bot`, client.user.tag)
    .addRow(`Guild(s)`, `${client.guilds.cache.size} Server(s)`)
    .addRow(`Member(s)`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Members`)
    .addRow(`Prefix`, `${client.prefix}`)
    .addRow(`Commands`, `${client.commands.size} (Prefix)`)
    .addRow(`Commands`, `${client.slashCommands.size} (Slash)`)
    .addRow(`Discord.js`, `${version}`)
    .addRow(`Node.js`, `${process.version}`)
    .addRow(`Memory`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
  setTimeout(() => { console.log(table.toString()) }, 3000)

});
