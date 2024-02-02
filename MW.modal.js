const nextButton = document.querySelector(".data-modal-open")
const yesButton = document.querySelector(".data-modal-close")
const noButton = document.querySelector(".data-modal-close2")
const modal = document.querySelector("#modal")

nextButton.addEventListener("click", () => { modal.showModal()
})

yesButton.addEventListener("click", () => { modal.close()
})

noButton.addEventListener("click", () => { modal.close()
})

