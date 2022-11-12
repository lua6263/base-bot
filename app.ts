import {Client} from "discord.js";
import {config} from "dotenv";

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!',
}]

const token = config().parsed?.['TOKEN'];
console.log(token);


const client = new Client({intents: ['Guilds', 'GuildMessages']});

client.login(token)