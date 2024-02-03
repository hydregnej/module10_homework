let arr = [1, 2, 0, 8, null, '11', 0, 35, 63, 0]
let arrOdd = 0
let arrEven = 0
let arrZero = 0
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] == 0) {
      arrZero++
    } else if (arr[i] % 2 === 0) {
      arrEven++
    } else {
      arrOdd++
    }
  }
}
console.log(`В массиве ${arrEven} чётных элемента и ${arrOdd} нечётных, а также ${arrZero} нулевых элемента`)