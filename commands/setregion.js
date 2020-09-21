const { Guild } = require("discord.js");

module.exports = {
    name: 'setregion',
    description: 'change the region',
    execute(message, args) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        message.guild.setRegion(args.slice(0).join(" "))
        .then(updated => message.channel.send(`Nouvelle région : ${updated.region}`))
        .catch(console.error);
    }
};