module.exports = {
    name: 'ban',
    description: 'ban a person',
    execute(message) {
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        const user = message.mentions.users.first();
        if (user) {
         const member = message.guild.member(user);
          if (member) {
           member
              .ban({
                reason: "t'es nul",
              })
              .then(() => {
               message.reply(`${user.tag} a bien été bannis.`);
             })
              .catch(err => {
                message.reply('tu ne peux pas bannir cette personne car elle possède des droits administrateurs.');
                console.error(err);
           });
         } else {
           message.reply("l'utilisateur n'est pas sur le serveur.");
         }
        } else {
        message.reply("tu dois mentionner quelqu'un.");
        }
    }
};