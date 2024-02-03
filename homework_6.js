let arr = [2, 1, 1, 1]
let CheckingElementsTrueOrFalse = true
for (let i = 1; i < arr.length; i++) {
  if (arr[0] !== arr[i]) {
    CheckingElementsTrueOrFalse = false
  }
}
console.log(CheckingElementsTrueOrFalse)