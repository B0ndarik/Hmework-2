let a = parseFloat(prompt('Введіть значення а',0))
let b = parseFloat(prompt('Введіть значення b',0))
let c = parseFloat(prompt('Введіть значення c',0))

let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / (-b))

document.write(`S1 = ${s1.toFixed(2)}<br>`) 
document.write(`S2 = ${s2.toFixed(2)}<br>`) 
document.write(`S3 = ${s3.toFixed(2)}<br>`) 
document.write(`S4 = ${s4.toFixed(2)}`) 