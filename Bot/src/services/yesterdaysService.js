export async function getStringForYesterdays() {
    let mentionString = ""

    try {
        const response = await fetch(`https://banquidle-webapp.antlia.dopolytech.fr/api/nb_tries_yesterday`)
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

    return mentionString
}