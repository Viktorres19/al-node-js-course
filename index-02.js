const fs = require('fs')

// write json file

const obj = {
    "course" : "node.js 2024",
    "sprints" : 12,
    "tasks": 165,
    "tags": ["fs", "file", "database"]
}

fs.writeFileSync('j_1.json', JSON.stringify(obj), {encoding : 'utf8', flag: 'w'}) //запише такий json {"course":"node.js 2024","sprints":12,"tasks":165} в цей j_1.json файл