//приклад підключення іменованого модуля
// const m1 = require('./example_module')

// console.log(m1.randomInt())

//більш зручний способ іменного модуля
const {randomInt} = require('./example_module')
console.log(randomInt())