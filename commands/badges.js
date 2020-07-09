const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (_client, message) => {

    const invEmbed = new MessageEmbed()
    .setColor("#00ff00")
    .setTitle("**Odznaki**")
    .setDescription(`**Lista odznak:**
    Globalnie zbanowany: <:ban:730133943789289494>
    Bot: <:bot:729995568486547486>
    Uzytkownik: <:uzytkownik:730134103600660572>
    Beta-Tester: <:idk:730134218604019733>
    Lowca Bledow: <:hunter:730134329690161182>
    Partner: <:partner:730134441858564138>
    Zasluzony: <:zasluzony:730134544191324302>
    Support: <:sup:730134643067846657>
    Staff: <:staff:730134736239984720>
    Developer: <:dev:730124696389025864>
    Wlasciciel: <:wlasd:730134882436513905>
    
    **Twoje odznaki:**
    <:uzytkownik:730134103600660572>`)
    .setTimestamp();
    message.channel.send(invEmbed);

}

module.exports.help = {
    name: "odznaki",
}
