const Discord = require('discord.js') // npm i discord.js@12
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
	console.log(`Quoi ? ${client.user.tag}!`)
	client.user.setActivity(`Nats`, { type: "STREAMING", url: "https://github.com/natslol/QuoiFeurBot/"})
});

client.on('message', message => {
    if (message.author.bot) return;
    var char = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", ";", "/" , "\\", "!", "`", "£", "%", "§", ".", ",", "£", "µ", "~", "#", "`", "@", "=", "°", "¨", ""] // if you to add more special char do it (don't remove the last one or it will not work, idk why)
    // add your id or any id which will not be pinged (config.json)
    for (id in config.anti_quoifeur) {
        if (message.author.id === config.anti_quoifeur[id]) return;
    }

    var p = message.content; 
    for(a in char) {
        if (p.includes(char[a])) {
            while (p.indexOf(char[a]) > 1) {
                    p = p.replace(char[a], '');
            }
            var quoiSplit = p.toLowerCase().toString().split(' ')[p.toLowerCase().toString().split(' ').length - 1].toString().split("");
            while (quoiSplit[quoiSplit.length - 1] == quoiSplit[quoiSplit.length - 2]) {            
                quoiSplit.pop();
            };
            var quoi = ["quoi", "koi", "qua", "coa", "coi", "koa", "quoa", "qoa", "qoi", "kwa", "cwa", "qwa", "qu01", "quo1", "qu0i", "k01", "ko1", "k0i",]; // if you want to add more do it
            quoi.forEach(i => {
                if (quoiSplit.join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "").endsWith(i)) {
                    rand = ["Feur", "Feur, comme le metier de ta soeur", "Feur, tête de chou fleur", "Feur, à domicile", "Feur, vas te coiffer tu me fais peur", "Feur, tu veux la coupe à ton chauffeur ?", "Feur, tu veux monter sur mon tracteur ?", "Feur, j'ai plus de rimes en eur", "Feur, surement", "Quoicoubeh", "Drilataire", "F~ Eh nan t'as de la chance je ne te le ferais pas cette fois-ci"]; // if you want to add more do it
                    console.log(`${message.author.tag} (${message.author.id}) c'est pris un petit feur dans ${message.guild} (${message.guild.id})`);
                    message.reply(rand[Math.floor(Math.random()*rand.length)]);
                };
            });
            break;
        };
    };
});


client.login(config.token); // https://www.writebots.com/discord-bot-token/
