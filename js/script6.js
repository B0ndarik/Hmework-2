let price1 = parseFloat(prompt('Вартість товару 1', 0))
let price2 = parseFloat(prompt('Вартість товару 2', 0))
let price3 = parseFloat(prompt('Вартість товару 3', 0))

let amount1 = parseInt(prompt('Кількість товару 1', 0))
let amount2 = parseInt(prompt('Кількість товару 2', 0))
let amount3 = parseInt(prompt('Кількість товару 3', 0))

let sum1 = price1 * amount1
let sum2 = price2 * amount2
let sum3 = price3 * amount3

let total = sum1 + sum2 + sum3

document.write(
	`<table border="2">
                <thead>
                    <tr>
                        <th>Товар:</th>
                        <th>Кількість:</th>
                        <th>Ціна:</th>
                        <th>Загальна вартість:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Товар 1</td>
                        <td>${amount1}</td>
                        <td>${price1}</td>
                        <td>${sum1}</td>
                    </tr>
                    <tr>
                        <td>Товар 2</td>
                        <td>${amount2}</td>
                        <td>${price2}</td>
                        <td>${sum2}</td>
                    </tr>
                    <tr>
                        <td>Товар 3</td>
                        <td>${amount3}</td>
                        <td>${price3}</td>
                        <td>${sum3}</td>
                    </tr>
                    <tr>
                        <td colspan="3">Вартість всіх товарів:</td>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </table>`
)