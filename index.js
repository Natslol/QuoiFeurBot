const Discord = require('discord.js') // npm i discord.js@12
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
	console.log(`Quoi ? ${client.user.tag}!`)
	client.user.setActivity(`Nats`, { type: "STREAMING", url: "https://github.com/natslol/QuoiFeurBot/"})
});

client.on('message', message => {
    if (message.author.bot) return;
    var char = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "/" , "\\", "!", "`", "£", "%", "§", ".", ""] // if you to add more special char do it 
    // add your id or any id which will not be pinged  
    if (message.author.id === "973931606442139688") return; 
    for(a in char) {
        if (message.content.endsWith(char[a])) {
            var p = message.content;
            while (p.indexOf(char[a]) > 1) {
                    p = p.replace(char[a], '');
            }
            p = p.toLowerCase().toString();
            var quoi = ["quoi", "koi", "coa", "coi", "koa", "quoa", "qoa", "qoi", "kwa", "cwa", "qwa", "qu01", "quo1", "qu0i", "k01", "ko1", "k0i",]; // if you want to add more do it
            quoi.forEach(i => {
                var split = p.split(' ');
                var array = split.toString().split('');
                while (array[array.length - 1] == array[array.length - 2]) {            
                    array.pop();
                };
                numchar = 0;
                array.forEach(i => {
                    if (char.includes(i)) {
                        array.splice(numchar, 1);
                    }
                    numchar++;
                });
                if (array.join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "").endsWith(i)) {
                    rand = ["Feur", "Feur comme le metier de ta soeur", "Feur tête de chou fleur", "Feur à domicile", "Feur vas te coiffer tu me fais peur", "Feur tu veux la coupe à ton chauffeur ?", "Feur tu veux monter sur mon tracteur ?", "Feur j'ai plus de rimes en eur", "Feur surement"];
                    console.log(`${message.author.tag} (${message.author.id}) c'est pris un petit feur dans ${message.guild} (${message.guild.id})`);
                    message.reply(rand[Math.floor(Math.random()*rand.length)]);
                };
            });
            break;
        };
    };
});

client.login(config.token); // https://www.writebots.com/discord-bot-token/
