module.exports = {
    name: 'chan',
    description: 'creating writting channel',
    execute(message, args) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        const name = message.content.replace('chan ', '')
        setInterval(() => {
            message.guild.channels
                .create(name, {
                    type: 'text',
            }) 
        }) 
    }
};