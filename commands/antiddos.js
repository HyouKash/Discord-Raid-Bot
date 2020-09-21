module.exports = {
    name: 'antiddos',
    description: 'change 2 fois de region',
    execute(message) {       
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");                
        message.channel.send('antiddos - Changement en cours..')    
        message.guild.setRegion('london')
        .then(updated => message.channel.send(`La région a bien été refresh en : ${updated.region}`))               
        message.guild.setRegion('europe')            
        .then(updated => message.channel.send(`La région a bien été refresh en : ${updated.region}`))
        .catch(console.error);          
    }
};