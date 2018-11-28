const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "-";
  
client.on('ready', () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
      setInterval(() => {
      client.channels.get("512398330278576128").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
      },2000);

      let Cmds = ["#rep <@459875496344158209> ","#daily"]
      setInterval(() => {
      client.channels.get("512581406279467008").send(`${Cmds[Math.floor(Math.random() *Cmds.length)]}`);//لا تنسى تحط أيدي الروم
     },86460000);

      console.log(`Logged in as ${client.user.tag}!`);
});

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