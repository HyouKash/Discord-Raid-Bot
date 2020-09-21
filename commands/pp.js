const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'pp',
    description: 'change the pp of the serveur',
    execute(message) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        message.guild.setIcon('LIEN A METTRE');
    }
};