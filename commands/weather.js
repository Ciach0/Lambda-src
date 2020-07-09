const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const superagent = require('superagent');
const { formatTime } = require("../functions.js");

    module.exports.run = async (client, message, args) => { 
        if (!args[0]) {
            const embed = new MessageEmbed()
            .setColor('#e74c3c ')
            .setAuthor(`Error`)
            .setDescription(`Poprawne uzycie: &weather <miejscowosc>`)
            .setFooter(`Invoked by ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
            .setTimestamp()
            return message.channel.send(embed).then(m => m.delete(5000) && message.delete(5000));
        }

        let { body } = await superagent
        .get(encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&appid=TOKEN&units=metric&lang=pl`)).catch(() => {
            return message.channel.send(new MessageEmbed().setAuthor(`Błąd API`, `https://fluentbot.pl/img/error.png`).setDescription(`Nie znaleziono takiego miasta.`).setColor('#ea2d3f').setTimestamp().setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`));
        });

        const embed = new MessageEmbed()
            .setAuthor(`Aktualna pogoda: ${body.name} - ${body.sys.country}`, `https://fluentbot.pl/img/openweather.png`)
            .setTimestamp()
            .setThumbnail(`http://openweathermap.org/img/w/${body.weather[0].icon}.png`)
            .setFooter(`${message.author.tag} | Powered by: openweathermap.org`, `${message.author.displayAvatarURL}`)
            .setColor('#e96e4c')
            .addField(`Opis:`, `${body.weather[0].description}`, false)
            .addField(`Temperatura:`, `${body.main.temp} °C`, true)
            .addField(`Temperatura min:`, `${body.main.temp_min} °C`, true)
            .addField(`Temperatura max:`, `${body.main.temp_max} °C`, true)
            .addField(`Temperatura odczuwalna:`, `${body.main.feels_like} °C`, true)
            .addField(`Wilgotność:`, `${body.main.humidity}%`, true)
            .addField(`Ciśnienie:`, `${body.main.pressure} hPa`, true)
            .addField(`Wiatr:`, `${body.wind.speed} km/h`, true)
            .addField(`Zachmurzenie:`, `${body.clouds.all}%`, true)
            .addField(`Widoczność:`, `${body.visibility ? body.visibility + 'm' : 'Brak danych'}`, true)
            .addField(`Wschód słońca:`, `${formatTime(new Date(body.sys.sunrise * 1000))}`, true)
            .addField(`Zachód słońca:`, `${formatTime(new Date(body.sys.sunset * 1000))}`, true)
            .addField(`Dokładniejsza pogoda:`, `[Kliknij tu](https://openweathermap.org/city/${body.id})`, false)
            
        message.channel.send(embed)

    }


module.exports.help = {
    name: "pogoda",
}
