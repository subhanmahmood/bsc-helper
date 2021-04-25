const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(files => files.endsWith('.js'))
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('online')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()
    if (command === 'link') {
        client.commands.get('link').execute(message, args)
    } else if (command === 'bnb') {
        client.commands.get('bnb').execute(message, args)
    } else if (command === 'help') {
        const commands = client.commands.array()
        let messageString = ""
        commands.forEach(c => {
            messageString = messageString + (`**${prefix}${c.name}**\n${c.description}\n\n`)
        })
        message.channel.send(messageString)
    }
})




client.login('ODI1NzYxNTY4MDI5MTQ3MTM3.YGCoYw.SzddE__EPSSbzNQdkP2tBiAI4Rs')