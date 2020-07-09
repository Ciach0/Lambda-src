const { MessageEmbed } = require("discord.js")
const dateFormat = require("dateformat")
exports.run = async (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!user) user = message.member;
    let presence = (user.presence.status === "dnd" ? "<:awdawd:730145710686732326>" : user.presence.status === "online" ? `(Online)` : user.presence.status === "idle" ? `(Zaraz wracam)` : user.presence.status === ("offline") ? `(Offline)` : "");
    let userinfo = {};
    userinfo.game = message.author.presence.game === null ? "Obija się" : message.author.presence.game;
    message.channel.send({embed: {
        title: "Informacje o uzytkowniku",
        description: `Informacje o uzytkowniku: ${user}`,
        color: 0x2ecc71,
        thumbnail: {
            url: user.user.avatarURL()
        },
        fields: [
            {
                name: "ID:",
                value: user.id
            },
            {
                name: "Pseudonim:",
                value: user.displayName
            },
            {
                name: "Aktywnosc:",
                value: presence
            },
            {
                name: "Nazwa uzytkownika:",
                value: user.user.username
            },
            {
                name: "Uprawnienia:",
                value: "."
            },
            {
                name: "Bot",
                value: (user.user.bot ? "Tak" : "Nie")
            },
            {
                name: "Data stworzenia konta:",
                value: dateFormat(user.user.createdTimestamp, "dd.mm.yyyy hh:MM")
            },
            {
                name: "Gra:",
                value: `${user.presence.game}`
            },
            {
                name: "Status wlasny",
                value: `${user.presence.status}`
            },
            {
                name: "Avatar:",
                value: `[Klik](${user.user.avatarURL()})`
            },
            {
                name: "Globalnie zbanowany",
                value: "Nie"
            },
            {
                name: `Odznaki ${user.user.username}`,
                value: "<:uzytkownik:730134103600660572>"
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
    name: "userinfo",
}
