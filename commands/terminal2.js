const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (_client, message, args) => {
    if (!args[0]) {
        const embed = new MessageEmbed()
        .setColor('#e74c3c ')
        .setAuthor(`Error`)
        .setDescription(`Poprawne uzycie: &terminal <text>`)
        .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        .setTimestamp()
        return message.channel.send(embed).then(m => m.delete(5000) && message.delete(5000));
    }

    var channel = message.channel;

    let {body} = await superagent
    .get(`https://api.labybot.pl/api/terminal.php?text=${args.join(" ")}`).catch((err) => {
    channel.send("Wystąpił błąd z API!");
    return console.log(err);
});

    try {
        let embed = new MessageEmbed()
        .setColor(body.color)
        .setImage(body.message);
        channel.send(embed);
    } catch(err){
        channel.send("Wystąpił błąd z botem!")
        return console.log(err);
    }

}
module.exports.help = {
    name: "terminal"

}
