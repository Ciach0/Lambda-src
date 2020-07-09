const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run = async (client, message, args) => {
    const m = await message.channel.send('ٴٴ');
    const pingembed = new MessageEmbed()
    .setTitle("**Pong**")
    .setColor("#2ecc71")
    .setDescription(`**Ping bota:** \n${m.createdTimestamp - message.createdTimestamp}ms.\n**Ping API:**\n${Math.round(client.ping)}ms.`)
    .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    message.channel.send(pingembed);
}
module.exports.help = {
    name: "ping",
    category:"info",
    description:"Pokazuje ping bota",
    use:"<prefix>ping"
}