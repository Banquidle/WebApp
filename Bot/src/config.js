import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export const CONFIG = {
    TOKEN: process.env.TOKEN,
    ACTIVITY_ID: process.env.ACTIVITY_ID,
    GUILD_ID: process.env.GUILD_ID,
    TEXT_CHANNEL_ID: process.env.TEXT_CHANNEL_ID,
    PATCH_NOTES_DIR: path.resolve('res/patches'),
    CRON_SCHEDULE: '43 09 * * *',
    TIMEZONE: 'Europe/Paris'
}