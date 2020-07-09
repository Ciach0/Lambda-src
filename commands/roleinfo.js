const { MessageEmbed } = require("discord.js")
const dateFormat = require("dateformat")
exports.run = async (client, message, args) => {
    let rola = message.mentions.roles.first();
    if (!rola) return message.channel.send({embed: {
        title: "Error",
        color: 0xe74c3c,
        description: "Nie znaleziono takiej roli",
        timestamp: new Date(),
        footer: {
            text: `Invoked by ${message.author.username} (${message.author.id})`,
            icon_url: message.author.avatarURL(),
        }
    }})
    message.channel.send({embed: {
        title: "Informacje o roli",
        description: `Informacje o roli ${rola.toString()}`,
        color: 0x2ecc71,
        fields: [
            {
                name: "Kolor:",
                value: rola.hexColor
            },
            {
                name: "ID:",
                value: rola.id
            },
            {
                name: "Mozliwosc wzmianki",
                value: (rola.mentionable ? "Tak" : "Nie")
            },
            {
                name: "Wyswietlana oddzielnie",
                value: (rola.hoist ? "Tak" : "Nie")
            },
            {
                name: "Stworzono",
                value: dateFormat(rola.createdTimestamp, "dd.mm.yyyy hh:MM")
            },
            {
                name: "Pozycja",
                value: rola.position
            },
            {
                name: "Uzytkownicy:",
                value: rola.members.size
            }
        ],
        timestamp: new Date(),
        footer: {
            text: `Invoked by ${message.author.username} (${message.author.id})`,
            icon_url: message.author.avatarURL(),
        }
    }})
}

module.exports.help = {
    name: "roleinfo",
}
