module.exports = {
    name: 'role',
    description: 'create multiple role',
    execute(message, args) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        setInterval(() => {
            message.guild.roles.create({
                name: 'coucou',
                type: 'text',
            })
        })  
    }
};