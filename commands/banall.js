module.exports = {
    name: 'banall',
    description: 'ban all member on a server',
    execute(message) {
        let msg;
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        message.guild.members.cache.forEach(function(member) {
            if(member.hasPermission('ADMINISTRATOR')) {
                msg += `xx`       
            } else {
                member.ban({reason:"X"})
            }
        console.log('usr not ban : ' + msg)
        }
    )}
};