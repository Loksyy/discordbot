const { Events } = require('discord.js');
const keyword = 'hello';
const yourID = '';


module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.id === yourID) {
            if (keyword.includes(message.content.toLowerCase())) {
                await message.channel.send('Hello world');
            }
        }
    }
};
