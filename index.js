//Підключаємо модулі для роботи з файловою системою
//вбудований в систему:
const fs = require('fs')
const path = require('path')

const pathToDir = './test'

//Впевнюємся в існуванні папки
function isFolderExists() {
    if (fs.existsSync(pathToDir)) {
        console.log('yes')
        return
    }
    console.log('no')
}

// isFolderExists()

//Впевнюємся в існуванні файлу
function isFileExists(file) {
    const pathToFile = `${pathToDir}/${file}`
    if (fs.existsSync(pathToFile)) {
        console.log(`file ${file} exists`)
        return true
    }
    console.log(`file ${file} doesn't exist`)
    return false
}
// isFileExists('info.dat')
// isFileExists('flying.mp3')
// isFileExists('potter.doc')

//Вираховуємо розмір файлу
const countFileSize = (file) => {
    isFileExists(file) //спочатку впевнюємся в існуванні файлу
    if (isFileExists) {
        const pathToFile = `${pathToDir}/${file}`
        const fileInfo = fs.statSync(pathToFile)
        console.log(`file ${file} has size ${fileInfo.size} Bites`)
    } else {
        console.log(`file ${file} doesn't exist`)
    }
}
// countFileSize('ino.dat')
// countFileSize('potter.doc')
// countFileSize('Flying.mp3')


//ім'я і розширення файлу
const fileNameAndExtension = (file) => {
    const pathToFile = `${pathToDir}/${file}`
    console.log(path.basename(pathToFile)) // Flying.mp3
    console.log(path.dirname(pathToFile)) // ./test
    console.log(path.extname(pathToFile)) // .mp3
    //метод дозволяє розпарсити вивід:
    console.log(path.parse(pathToFile)) // { root: '', dir: './test', mbase: 'Flying.mp3', ext: '.mp3', name: 'Flying'}
}
// fileNameAndExtension('Flying.mp3')

//Отримуємо всі файли і папки в директорії
const showDirectoryFilesFolders = (dir) => {
    const allFiles = fs.readdirSync(dir)
    console.log(allFiles) // [ 'Flying.mp3', 'info.dat', 'potter.doc' ]
    let out = ''
    allFiles.forEach(item => out += item + '\n') // виводимо всі назви з переносом строки
    console.log(out)
}

// showDirectoryFilesFolders(pathToDir)

// Отримати абсолютний шлях

const directoryPath = path.join(__dirname, 'test')
console.log('directoryPath: ' + directoryPath) // D:\Academy\JavaScript\node-js\al-node-js-course\test
