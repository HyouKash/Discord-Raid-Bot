const { Guild } = require("discord.js");

module.exports = {
    name: 'setname',
    description: 'set a name to the serveur',
    async execute(message, args) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        if(!args[0]) return message.channel.send('Veuillez écrire un nom.');
        await message.guild.setName(args.slice(0).join(" ")), message.channel.send(`Le serveur a bien été rennomé en ${args.slice(0).join(" ")}`);            
    }
};