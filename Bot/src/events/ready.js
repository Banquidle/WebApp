import cron from 'node-cron'
import {CONFIG} from '../config.js'
import {sendBanquidleInvite} from '../utils/messageUtils.js'
import {getStringForYesterdays} from "../services/yesterdaysService.js";

export async function handleReady(client) {
    console.log(`✅ Bot is ready! Logged in as ${client.user.tag}`)

    cron.schedule(CONFIG.CRON_SCHEDULE, async () => {
        console.log('> running daily..')

        const mentionString = await getStringForYesterdays()

        await sendBanquidleInvite(client, null, mentionString)
    }, {
        timezone: CONFIG.TIMEZONE
    })
}