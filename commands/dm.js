module.exports = {
    name: 'dm',
    description: 'send message in dm',
    execute(message) {
        message.guild.members.cache.forEach(function(member) {
            if(member.id == "ID DU BOT" || member.user.bot) {
                let x;
            } else {
                member.send('MESSAGE A METTRE')
            }
        })
    }
};