import { Client, GatewayIntentBits, Events } from 'discord.js'
import { CONFIG } from './config.js'
import { handleReady } from './events/ready.js'
import { handleMessageCreate } from './events/messageCreate.js'
import { handleInteractionCreate } from './events/interactionCreate.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once(Events.ClientReady, (c) => handleReady(c))
client.on(Events.MessageCreate, (message) => handleMessageCreate(message, client))
client.on(Events.InteractionCreate, (interaction) => handleInteractionCreate(interaction, client))

client.login(CONFIG.TOKEN)