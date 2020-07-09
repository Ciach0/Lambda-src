const { stripIndents } = require("common-tags");
const superagent = require('superagent');
const { MessageEmbed } = require("discord.js")

    module.exports.run = async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
            .setColor('#e74c3c ')
            .setAuthor(`Error`)
            .setDescription(`Poprawne uzycie: &captcha <text>`)
            .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            .setTimestamp()
            return message.channel.send(embed).then(m => m.delete(5000) && message.delete(5000));
        }

        let { body } = await superagent
        .get(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`)).catch(() => {
            return message.channel.send(new MessageEmbed().setAuthor(`Błąd API`, `https://fluentbot.pl/img/error.png`).setDescription(`Wystąpił nieoczekiwany błąd API.`).setColor('#ea2d3f').setTimestamp().setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`));
        });

        const embed = new MessageEmbed()
        .setAuthor(`Clyde`)
        .setColor('#2ecc71')
        .setFooter(`Invoked by ${message.author.username} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        .setTimestamp()
        .setImage(body.message)

        message.channel.send(embed)
    }

module.exports.help = {
    name: 'clyde',
    aliases: ["cmm"],
    usable: "Users",
    description: "Sends a pictures of the user's input on a \"change my mind\" Sign.",
    usage: ">cmm <TEXT>",
    category: "Image Manipulation",
    enabled: true
    };