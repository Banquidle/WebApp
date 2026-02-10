document.addEventListener("turbo:submit-end", function (event) {
    if (event.target.id === "guessForm") {
        event.target.reset()
        personInput.focus()
    }
})