let birthYear = parseInt(prompt("Введіть рік народження", 0))
let currentYear = new Date().getFullYear()

let age = currentYear - birthYear

document.write(`Вік ${age} роки`)