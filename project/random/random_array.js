const randomInt = require('./random_int')

module.exports = function (len = 10) {
    let temp = [] // створюється пустий масив
    for (let i = 0; i < len; i++) temp.push(randomInt()) //циклом цей масив наповнюється
    return temp //після цього цей масив повертається
}