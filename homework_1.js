let inputUser = prompt('Введите значение')
let isNumber = +inputUser
let isNuberOrNan = typeof isNumber == 'number'
let isNumberEven = 'Это число чётное'
let isNumberodd = 'Это число нечётное'
let isNumberError = 'Упс, кажется Вы ошиблись!'

let isNan = !isNaN(isNumber)

if (isNuberOrNan && isNan) {
  let numberEvenOrOdd = isNumber % 2
  ? isNumberodd
  : isNumberEven
  console.log(numberEvenOrOdd)
} else {
  console.log(isNumberError)
}