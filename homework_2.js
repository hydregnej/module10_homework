let x = "41"
switch (typeof x) {
  case 'number':
    console.log('x - число, его значение ' + x)
    break
  case 'string':
    console.log('x - строка, его значение ' + x)
    break
  case 'boolean':
    console.log('x - булевое значение, его значение ' + x)
     break
  default:
    console.log('Тип x - не определён, его значение ' + x)
}