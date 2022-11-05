import {REST, Routes, Client, Snowflake} from 'discord.js';

import * as dotenv from 'dotenv';

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!',
}]

const token = dotenv.parse('TOKEN');

const rest = new REST({version: '10'}).setToken(token);
const refreshingApp = async () => {
    try {
        console.log('Started refreshing application (/) commands.')
        await rest.put(Routes.(), {body: commands})
        console.log('Successfully reloaded application (/) commands.');
    } catch (e) {
        console.error(e);
    }
};

refreshingApp().then(() => {
    console.log('refreshed')
});

const client = new Client({ intents: [Snowflake.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(TOKEN);