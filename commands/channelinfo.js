const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first();
if (!kanal) kanal = message.channel;
let type = (kanal.type === "voice" ? "Glosowy" : kanal.type === "text" ? "Tekstowy" : kanal.type);
const dateFormat = require("dateformat")
message.channel.send({embed: {
    title: "Informacje o kanale",
    description: `Informacje o kanale ${kanal.toString()}`,
    fields: [
        {
            name: "ID:",
            value: kanal.id
        },
        {
            name: "Nazwa:",
            value: kanal.name
        },
        {
            name: "Typ kanalu",
            value: type
        },
        {
            name: "Stworzono",
            value: dateFormat(kanal.createdTimestamp, "dd.mm.yyyy hh:MM")
        },
        {
            name: "Pozycja",
            value: kanal.position
        },
        {
            name: "Kategoria",
            value: message.guild.channels.cache.get(kanal.parentID)
        }
    ],
    color: 0x2ecc71,
    timestamp: new Date(),
    footer: {
        text: `Invoked by ${message.author.username} (${message.author.id})`,
        icon_url: message.author.avatarURL(),
    }
}})
}

module.exports.help = {
    name: "channelinfo",
}
