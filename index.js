// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client
({ 
    intents: 
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ] 
});

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.on(Events.MessageCreate,(message) => {
    if (message.content.includes('ㄐㄐ'))
        {
            message.channel.send('屁眼')
        }
});
client.on(Events.MessageCreate,(message) => {
    if (message.content. includes('rr'))
        {
            message.channel.send('偷ㄐㄐ 好色')
        }
});
// Log in to Discord with your client's token
client.login(token);