// npm init -y  (creates package.json)
// npm install fs
// node fs-example.js
//npmjs.com  look up axios (fetch)
//yarnpkg.com
//npm init -y
// npm i axios

// from jason file "npm install"

//sudo npm install -g nodemon
//npi npm -d nodemon        //means dev dependencies

//PLACE THE GITIGNORE FILE IN THE DI BOOTCAMP FOLDER


const fs = require('fs')

try {
    const data = fs.readFileSync('info', 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
}

fs.readFile('info')