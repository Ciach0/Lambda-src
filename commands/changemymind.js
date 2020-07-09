const Discord = require("discord.js");
const { get } = require("superagent");
const { MessageEmbed } = require("discord.js")
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send(new MessageEmbed().setColor('#e74c3c').setAuthor("Error").setDescription('Poprawne uzycie: `&changemymind <tekst>`').setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true })));
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=changemymind&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new MessageEmbed()
            .setColor("#2ecc71")
            .setAuthor("Change my mind")
            .setImage(res.body.message)
            .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            .setTimestamp()
            setTimeout(() => {
                return message.channel.send(embed);
            }, 200);
        });
    } catch(err) {
        let errchannel = bot.channels.get('523969673239461892')
        errchannel.send(err)
        console.log(err)    
    }
}
module.exports.help = {
name: 'changemymind',
aliases: ["cmm"],
usable: "Users",
description: "Sends a pictures of the user's input on a \"change my mind\" Sign.",
usage: ">cmm <TEXT>",
category: "Image Manipulation",
enabled: true

};
