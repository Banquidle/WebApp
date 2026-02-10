import {DiscordSDK} from "@discord/embedded-app-sdk"

console.log("hello.")

function getDiscordClientId() {
    const clientIdTag = document.querySelector('meta[name="discord-client-id"]')
    if (!clientIdTag || !clientIdTag.content) {
        console.error("Discord Client ID meta tag not found or is empty. Please add: <meta name='discord-client-id' content='YOUR_ID_HERE'> to your layout.")
        return null
    }
    return clientIdTag.content
}

let auth

async function setupDiscordSdk() {
    const discordClientId = getDiscordClientId()
    console.log("id : " + discordClientId)
    if (!discordClientId) return

    const discordSdk = new DiscordSDK(discordClientId)
    console.log(discordSdk)
    await discordSdk.ready()
    console.log("Discord SDK is ready")

    const {code} = await discordSdk.commands.authorize({
        client_id: discordClientId, response_type: "code", state: "", prompt: "none", scope: ["identify", "guilds"],
    })

    const response = await fetch("/api/token", {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            code
        })
    })

    const {access_token} = await response.json()

    auth = await discordSdk.commands.authenticate({access_token})

    if (auth == null) throw new Error("Discord SDK: Authenticate command failed")

    console.log("Discord SDK is authenticated!")

    const user_id = encodeURIComponent(auth.user.id)
    console.log("Authenticated as", user_id, "!")

    return auth
}

document.addEventListener("DOMContentLoaded", async () => {
    const auth = await setupDiscordSdk()
        .catch(err => console.error("Discord SDK setup failed:", err))

    const user_id = auth ? encodeURIComponent(auth.user.id) : new URLSearchParams(window.location.search).get('user_id')

    if (!user_id) return

    const response_game = await fetch(`/game/load_content?user_id=${user_id}`, {
        headers: {
            "Accept": "text/vnd.turbo-stream.html"
        }
    })

    const turboStream = await response_game.text()
    Turbo.renderStreamMessage(turboStream)
})

