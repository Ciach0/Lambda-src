const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run = async(bot, message, args) => {

    const pomocembed = new MessageEmbed()
        .setDescription("Prefix `&`\nInformacje o komendzie: `&help <nazwa komendy>`")
        .setTitle('**Pomoc**')
        .addField("<:dev:730124696389025864> **Komendy deweloperskie**", 
        "`eval`, `shell`, `reload`")
        .addField("<:ustawienie:729286601099706478> **Komendy konfiguracyjne**", 
        "`config`")
        .addField("<:icon_ban:729994367212978208> **Komendy administracyjne**",
        "`ban`, `kick`, `broadcast`, `clear`, `embed`")
        .addField("<a:icon_emoji:729994678912417793> **Komendy 4Fun**",
        "`achievement`, `calling`, `captcha`, `challenge`, `changemymind`, `challenge`, `clyde`, `cytat`, `dym`, `fakt`, `janusz`, `korwin`, `mem`, `terminal`, `triggered`, `usun`, `wanted`, `wasted`")
        .addField("<:1_:729994965299494922> **Narzedzia**",
        "`add-role`, `remove-role`, `rekr`, `lock`")
        .addField("<:bot:729995568486547486> Bot", 
        "`badges`, `bot`, `ekipa`, `ping`")
        .addField("<:informacja:730127486825922671> **Komendy informacyjne**", 
        "`covid19`, `help`, `serverinfo`, `userinfo`, `channelinfo`, `roleinfo`, `weather`")
       // .setFooter(`Komenda użyta przez ${message.author.tag}`)  
        .setTimestamp()
        .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
    message.channel.send(pomocembed);
};

module.exports.help = {
    name: "pomoc"

}
