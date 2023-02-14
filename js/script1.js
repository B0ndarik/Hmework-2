let a = parseFloat(prompt('Введіть значення а', 0))
let b = parseFloat(prompt('Введіть значення b', 0))

let result1 = a + b
let result2 = a * b
let result3 = a / b

document.write(
	`<table border="3">
		<tbody>
			<tr>
				<td>Сума</td>
				<td>${result1.toFixed(2)}</td>
			</tr>
			<tr>
				<td>Добуток</td>
				<td>${result2.toFixed(2)}</td>
			</tr>
			<tr>
				<td>Частка</td>
				<td>${result3.toFixed(2)}</td>
			</tr>
		</tbody>
	</table>`
)
