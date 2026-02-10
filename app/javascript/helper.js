document.addEventListener("turbo:submit-end", function (event) {
    if (event.target.id === "guessForm") {
        event.target.reset()
        personInput.focus()
    }
})

document.addEventListener("submit", function (event) {
    if (event.target.id === "guessForm") {
        const options = document.querySelectorAll("#people option")

        options.forEach(option => {
            if (option.value === personInput.value) {
                selectedPersonHidden.value = option.getAttribute("data-id")
            }
        })
    }
})