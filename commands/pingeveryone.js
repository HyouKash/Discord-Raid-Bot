module.exports = {
    name: 'ping',
    description: 'ping everyonee',
    execute(message) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        setInterval(() => {        
            message.guild.channels.cache.forEach(channel => channel.send("A REMPLIR"))
        })
    }     
};




