let seconds = parseInt(prompt("Кількість секунд", 0))

let hours = Math.floor(seconds / 3600)
let minutes = Math.floor((seconds % 3600) / 60)

document.write(`${hours} год ${minutes} хв`)