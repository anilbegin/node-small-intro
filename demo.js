const tripleMe = require('./tripleMe')
const validator = require('validator')
const fs = require('fs')

let myFavoriteNumber = 10
let myName = 'brad'

console.log(tripleMe(myFavoriteNumber))
console.log(myName.toUpperCase())
console.log(validator.isEmail('johnyahoo.com'))

fs.readFile('./content.txt', 'utf-8', function(err, data) {
    if(err) throw err
    fs.writeFile('./index.html', `<h2>${data}</h2>`, function(err) {
        if(err) throw err
        console.log("File created successfully")
    })
})