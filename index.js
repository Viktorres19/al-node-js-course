const fs = require('fs')

// read json file
//const data = fs.readFileSync('example_1.json')
/* const data = fs.readFileSync('example_1.json', {encoding : 'utf8'})
console.log(data) // без кодуванння: <Buffer 5b 0d 0a 20 20 20 20 7b 0d 0a 20 20 20 20 20 20 20 20 22 66 72 75 69 74 22 3a 20 22 41 70 70 6c 65 22 2c 0d 0a 20 20 20 20 20 20 20 20 22 73 69 7a 65 ... 45 more bytes>
console.log(data) // з кодуванням видасть все як є
console.log(typeof data) //string

let dataObj = JSON.parse(data) //після парсингу перетворюється в об'єкт [ { fruit: 'Apple', size: 'Large', color: 'Red' } ]
console.log(dataObj) */

// const data = fs.readFileSync('example_2.json', {encoding : 'utf8'})
// console.log(data)

// let dataObj = JSON.parse(data)
// console.log(dataObj)

const data = fs.readFileSync('j_1.json', {encoding : 'utf8'}) /* зчитає зі створеного json {
    course: 'node.js 2024',
    sprints: 12,
    tasks: 165,
    tags: [ 'fs', 'file', 'database' ]
  } */
console.log(data)

let dataObj = JSON.parse(data)
console.log(dataObj)