// Задание 1
// let inputUser = prompt('Введите значение')
// let isNumber = +inputUser
// let isNuberOrNan = typeof isNumber == 'number'
// let isNumberEven = 'Это число чётное'
// let isNumberodd = 'Это число нечётное'
// let isNumberError = 'Упс, кажется Вы ошиблись!'

// let isNan = !isNaN(isNumber)

// if (isNuberOrNan && isNan) {
//   let numberEvenOrOdd = isNumber % 2
//   ? isNumberodd
//   : isNumberEven
//   console.log(numberEvenOrOdd)
// } else {
//   console.log(isNumberError)
// }

// задание 2
// let x = 41
// switch (typeof x) {
//   case 'number':
//     console.log('x - число, его значение ' + x)
//     break
//   case 'string':
//     console.log('x - строка, его значение ' + x)
//     break
//   case 'boolean':
//     console.log('x - булевое значение, его значение ' + x)
//      break
//   default:
//     console.log('Тип x - не определён, его значение ' + x)
// }

// задание 3
// let str = "Hello"
// let reverseStr = str.split("").reverse().join("")
// console.log(reverseStr)

// задание 4
// let randomNum = Math.floor(Math.random() * 101)
// console.log(randomNum)

// задание 5
// let arr = [1, 3, 5, 7]
// console.log(`Количество элементов в массиве - ${arr.length}`)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// Задание 6
// let arr = [2, 1, 1, 1]
// let CheckingElementsTrueOrFalse = true
// for (let i = 1; i < arr.length; i++) {
//   if (arr[0] !== arr[i]) {
//     CheckingElementsTrueOrFalse = false
//   }
// }
// console.log(CheckingElementsTrueOrFalse)

// Задание 7
// let arr = [1, 2, 0, 8, null, '11', 0, 35, 63, 0]
// let arrOdd = 0
// let arrEven = 0
// let arrZero = 0
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//     if (arr[i] == 0) {
//       arrZero++
//     } else if (arr[i] % 2 === 0) {
//       arrEven++
//     } else {
//       arrOdd++
//     }
//   }
// }
// console.log(`В массиве ${arrEven} чётных элемента и ${arrOdd} нечётных, а также ${arrZero} нулевых элемента`)

// Задание 8
// let priceShop = new Map([
//   ['Кросовки', '2400 руб'],
//   ['Свитшот', '1200 руб'],
//   ['Носки', '50 руб'],
//   ['Кепка', '400 руб'],
//   ['Джинсы', '2700 руб']
// ])

// for (let name of priceShop) {
//   console.log(`Ключ - ${name[0]}, значение - ${name[1]}`)
// }