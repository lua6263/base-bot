import {Client, Routes, REST} from "discord.js";
import {config} from "dotenv";

const token = config().parsed?.['TOKEN'];
const clientId = config().parsed?.['CLIENT_ID'];
console.log({token, clientId});

const client = new Client({intents: ['Guilds', 'GuildMessages']});
client.login(token)
console.log(client)
client.on('channelCreate', () => {
    console.log(`${client.user?.id}`, 'has logged in')
});
client.on('channelUpdate', (oldC, newC) => {
    console.log('UPDATED CHANEL')
    console.log(oldC, newC)
})
client.on('messageCreate', (message) => {
    console.log(message);
})