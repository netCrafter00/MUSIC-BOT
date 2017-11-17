const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);MzgxMTA4MDQ5MDc2NjgyNzUy.DPCW_w.Rb3gKpjPD5mbikB6r0ppw07dh5I
