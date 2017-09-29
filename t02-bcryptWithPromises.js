const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'secret';
const resHash = ''
/**
 * Generate Password
 */
bcrypt.hash(password, saltRounds).then((res) => {
    console.log(res)
    this.resHash = res
}).catch(err => {
    console.log(err)
})

/**
 * Compare Password
 */
bcrypt.hash(password, saltRounds).then((hashRes) => {
    bcrypt.compare(password, hashRes).then((res) => {
        console.log("Comparison result: " + res)
    })
}).catch(err => {
    console.log(err)
})