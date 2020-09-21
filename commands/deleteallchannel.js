const { Channel } = require("discord.js");

module.exports = {
    name: 'deleteall',
    description: 'delete all channel',
    execute(message) {        
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        if(message.guild.channels.size === 0) return;
        message.guild.channels.cache.forEach(channel => channel.delete())
    }
};