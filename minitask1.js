// Build-in Method
// .map()

const numbers = [2, 3, 19, 30, 56];

// Manual
for(let i=0; i < numbers.length; i++){
    numbers[i] *= 10
}
console.log(numbers);

// .map()
const numberMap = numbers.map((n) => n * 10);
console.log(numberMap);
