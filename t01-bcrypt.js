const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'secret';
const hash = ""
/**
 * Generate Password
 */
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        if(err) {
            console.log(err)
        } else {
            this.hash = hash
            console.log(hash)
        }
    })
})

bcrypt.compare(password, hash, function(err, res) {
    if(err) {
        console.log(err)
    } else {
        console.log("Same Hashes")
    }
})
