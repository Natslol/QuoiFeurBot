const Discord = require('discord.js') // npm i discord.js@12
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
	console.log(`Quoi ? ${client.user.tag}!`)
	client.user.setActivity(`Ludo`, { type: 'LISTENING'})
});

client.on('message', message => {
	var char = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","/","\\","!","`",""]
    for(a in char) {
        if (message.content.endsWith(char[a])) {
            var p = message.content;
            while (p.indexOf(char[a]) > 1) {
                    p = p.replace(char[a], '');
            }
            p = p.toLowerCase().trim();
            var quoi = ["quoi", "koi", "coa", "coi", "koa", "quoa", "qoa", "qoi", "kwa", "cwa", "qwa"]; // if you want to add something else do it
            quoi.forEach(i => {
                var split = p.split(' ');
                if (split[split.length - 1].includes(i)) {
                    rand = ['Feur', 'Feur comme le metier de ta soeur', 'Feur tête de chou fleur', 'Feur à domicile', 'Feur vas te coiffer tu me fais peur', 'Feur tu veux la coupe à ton chauffeur ?', 'Feur tu veux monter sur mon tracteur ?', "Feur j'ai plus de rimes en eur", "Feur surement"];
                    console.log(`${message.author.tag} (${message.author.id}) c'est pris un petit feur dans ${message.guild} (${message.guild.id})`)
                    message.reply(rand[Math.floor(Math.random()*rand.length)]);
                }
            })
            break;
        }
    }
});

client.login(config.token); // https://www.writebots.com/discord-bot-token/