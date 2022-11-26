// constants
const secretKey = "День матери!"
const congritulations = [
    "123",
    "234",
    "345",
    "456",
]

let secretKeyInput = document.querySelector(".secret-key")
let tip = document.querySelector(".tip")
let content = document.querySelector(".content")

let currentCongritulation = 0

const signIn = () => {
    if (secretKey == secretKeyInput.value) {
        window.location.replace("/congritulations.html")
    }
}

const showTip = () => {
    tip.innerHTML = `Секретный ключ: ${secretKey}`
    setTimeout(() => { tip.innerHTML = ""}, 5000)
}

const onLoadCongritulations = () => {
    content.innerHTML = congritulations[0]
}

const nextCongritulation = () => {
    if (currentCongritulation == (congritulations.length - 1)) currentCongritulation = 0
    else currentCongritulation++
    updateContent()
}

const previousCongritulation = () => {
    if (currentCongritulation <= 0) currentCongritulation = congritulations.length - 1
    else currentCongritulation--
    updateContent()
}

const updateContent = () => {
    console.log(currentCongritulation)
    content.innerHTML = congritulations[currentCongritulation]
}
