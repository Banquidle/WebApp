export async function getStringForYesterdays() {
    let mentionString = ""

    try {
        const url = 'http://webapp:3000/api/nb_tries_yesterday'
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const data = await response.json()

        const sortedEntries = Object.entries(data)
            .map(([id, tries]) => ({ id, tries: parseInt(tries) }))
            .sort((a, b) => a.tries - b.tries)

        if (sortedEntries.length > 0) {
            const podiumEmojis = ['🥇', '🥈', '🥉']

            const podium = sortedEntries.slice(0, 3).map((player, index) => {
                const label = player.tries === 1 ? '1st try !' : `${player.tries} essais`
                return `${podiumEmojis[index]} <@${player.id}> : ${label}`
            })

            const others = sortedEntries.slice(3).map(player => {
                return `• <@${player.id}> : ${player.tries} essais`
            })

            mentionString = `### Podium \\\\\n`
            mentionString += podium.join('\n')

            if (others.length > 0) {
                mentionString += `\n\nAutrui \\\\\n${others.join('\n')}`
            }
        }
    } catch (error) {
        console.error(`Failed to fetch daily tries: `, error)
    }

    return mentionString
}
