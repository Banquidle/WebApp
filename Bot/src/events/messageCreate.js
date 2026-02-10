import {sendBanquidleInvite} from '../utils/messageUtils.js'
import {getLatestPatchNote} from '../services/patchesService.js'

export async function handleMessageCreate(message, client) {
    if (message.author.bot) return

    const content = message.content.toLowerCase()

    if (content.startsWith('!b')) {
        await sendBanquidleInvite(client, message)
    }

    if (content.startsWith('!p')) {
        const notes = await getLatestPatchNote()

        if (notes.length > 2000) {
            await message.reply("The patch note is too long for a single Discord message!")
        } else {
            await message.reply(notes)
        }
    }
}