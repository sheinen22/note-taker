//need to make read, writetofile and append
const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile)

const write = (dest, cont) =>
    fs.writeFile(dest, JSON.stringify(cont, null, 4), (err) =>
    err ? console.error(err) : console.info(`Data written to ${dest}`)
    );

const append = (cont, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            const parsed = JSON.parse(data)
            parsed.push(cont)
            write(file, parsed)
        }
    })
}

module.exports = { read, write, append}