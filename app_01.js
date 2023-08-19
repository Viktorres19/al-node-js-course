const fs = require('fs')

// read file

const pathToFile = 'info.txt'

const data = fs.readFileSync(pathToFile, {encoding: 'utf8', flag: 'r'}) // кодування, флаг (читати)
console.log(data)
console.log(typeof data) // string

//split the file line by line

let dataArr = data.split('\r\n') //['довідкова документація про API;', '', 'функціонал ES6;', '', 'посібники;', '', 'залежності.']
console.log(dataArr)
dataArr = dataArr.filter(line => line.trim() !== '') // ['довідкова документація про API;', 'функціонал ES6;', 'посібники;', 'залежності.'] //вирізали пробіли
console.log(dataArr)
