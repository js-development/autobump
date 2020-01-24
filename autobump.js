const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
));

module.exports.run = async(client, message, args) => {

  const interval = setInterval( () => {

     setTimeout(function(){
    message.channel.send(`!d bump`);
    }, ms(500));

    #setTimeout(function(){
    #message.channel.send(`dc!bump`);
    #}, ms(21600001));
  }, 10000);

  #const collector = message.channel.createMessageCollector(() => true);
  #collector.on("collect", m => {
  #  if(m.content === "stop") {
  #    clearInterval(interval);
  #    collector.stop();
  #  }
  #})
}


module.exports.help = {
  name: "autobump"
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
