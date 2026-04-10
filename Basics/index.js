const fs = require('fs')
const os = require('os')


// let data = fs.readFileSync('./abc.txt', 'utf-8')
// console.log(data)

//async way of reading file
// fs.readFile('./abc.txt', 'utf-8', (err, data) => {
//     console.log(err)
//     console.log(data)
// })

// console.log("Some random code")

// fs.writeFile('./newfile.txt', 'This is some new data', (err) => {
//     console.log(err)
//     console.log("File is written")
// })

// fs.appendFile('./newfile.txt', '\nThis is some appended data', (err) => {
//     console.log(err)
//     console.log("File is appended")
// }) 


console.log(os.platform())
console.log(os.hostname())
console.log(os.freemem())
console.log(os.homedir())

