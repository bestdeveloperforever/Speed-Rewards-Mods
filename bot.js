const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "mod!";
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(adminprefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(adminprefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login(process.env.B_T);
