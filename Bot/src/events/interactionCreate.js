import {Routes} from 'discord.js'

export async function handleInteractionCreate(interaction, client) {
    const isStartButton = interaction.isButton() && interaction.customId === 'start_banquidle'

    if (isStartButton) {
        try {
            console.log(`[Interaction] User ${interaction.user.tag} started the activity.`)
            
            await client.rest.post(Routes.interactionCallback(interaction.id, interaction.token), {
                body: {
                    type: 12
                }
            })
        } catch (error) {
            console.error("Failed to launch activity:", error)
        }
    }
}
