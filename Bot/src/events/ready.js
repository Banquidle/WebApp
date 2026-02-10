import cron from 'node-cron'
import {REST, Routes, ApplicationCommandType} from 'discord.js'
import {CONFIG} from '../config.js'
import {sendBanquidleInvite} from '../utils/messageUtils.js'

export async function handleReady(client) {
    console.log(`✅ Bot is ready! Logged in as ${client.user.tag}`)

    cron.schedule(CONFIG.CRON_SCHEDULE, async () => {
        console.log('> running daily..')

        let mentionString = ""

        try {
            const response = await fetch(`https://banquidle.antlia.dopolytech.fr/api/nb_tries_yesterday`)
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const data = await response.json()
            const entries = Object.entries(data)

            if (entries.length > 0) {
                const lines = entries.map(([id, tries]) => {
                    const count = parseInt(tries)
                    const label = count === 1 ? '1st try' : `${count} essais`
                    return `<@${id}>: ${label}`
                })

                mentionString = `Performance d'hier :\n${lines.join('\n')}`
            }
        } catch (error) {
            console.error(`Failed to fetch daily tries: `, error)
        }

        await sendBanquidleInvite(client, null, mentionString)
    }, {
        timezone: CONFIG.TIMEZONE
    })
}