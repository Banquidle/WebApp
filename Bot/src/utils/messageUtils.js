import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { CONFIG } from '../config.js'

export async function sendBanquidleInvite(client, targetMessage = null, extraContent = "") {
    try {
        const startButton = new ButtonBuilder()
            .setCustomId('start_banquidle')
            .setLabel('Start Banquidle')
            .setStyle(ButtonStyle.Success)

        const row = new ActionRowBuilder().addComponents(startButton)

        const payload = {
            content: `${extraContent}Rejoins le **Banquidle** du jour !`,
            components: [row]
        }

        if (targetMessage) {
            await targetMessage.reply(payload)
        } else {
            const guild = await client.guilds.fetch(CONFIG.GUILD_ID)
            const textChannel = guild.channels.cache.get(CONFIG.TEXT_CHANNEL_ID)
            if (textChannel?.isTextBased()) {
                await textChannel.send(payload)
            }
        }
    } catch (error) {
        console.error("Error sending invite:", error)
    }
}