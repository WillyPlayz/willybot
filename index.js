const Discord = require("discord.js")

const TOKEN = "OTgyNzA3NjM3OTQ0NzE3MzYy.G6pxp_.VrQCMpjm7OO0syPZhxfwp9HNUAbmmH55X0gvz4"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Welcome!")
    }
})

client.login(TOKEN)