let productAmount = parseInt(prompt("Введіть кількість товару", 0))
let productPrice = parseFloat(prompt("Введіть ціну одиниці товару", 0))

let total = productAmount * productPrice
let tax = total * 0.05

document.write(`Сума ${total.toFixed(2)}<br>`)
document.write(`ПДВ ${tax.toFixed(2)}`)