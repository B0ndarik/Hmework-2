let lengthCm = parseFloat(prompt('Введіть значення у сантиметрах', 0))

let lengthM = lengthCm / 100
let lengthKm = lengthCm / 100000

document.write(`Метри ${lengthM}<br>`)
document.write(`Кілометри ${lengthKm}`)