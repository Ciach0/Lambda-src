const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (_client, message) => {

    const invEmbed = new MessageEmbed()
    .setColor("#00ff00")
    .setTitle("**Ekipa**")
    .setDescription(`<:dev:730124696389025864> **Programisci:**
    Aleksio1123#0001
    JuzioMiecio520#8137
    <:staff:730134736239984720> **Staff:**
    Darling <3#1491
    <:sup:730134643067846657> **Support:**
    Sebkowy#3728`)
    .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    .setTimestamp();
    message.channel.send(invEmbed);

}

module.exports.help = {
    name: "ekipa",

}