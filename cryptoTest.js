// node.js has built in crypto lib
const crypto = require('crypto')

// hashing
// one way process -- a string that has been hashed
// regardless of the input, the hash is always the same size
// cannot be 'un-hashed'

// sha256
// const hash = crypto.createHash('sha256')

// hash.update('a') // create a hash out of the letter 'a'

// const digest = hash.digest('hex')
// console.log('sha256', digest)

// const userPass = 'abcd123'

// function makeHash(string) {
//     const hash = crypto.createHash('sha256')

//     hash.update('a') // create a hash out of the letter 'a'

//     const digest = hash.digest('hex')
//     return(digest)   
// }
// console.log(makeHash(userPass))

// const bcrypt = require('bcrypt')

// const userPassword = 'hello123'
// const hashedPassword = bcrypt.hashSync(userPassword, 12)

// console.log(userPassword, hashedPassword)
// console.log(bcrypt.compareSync(userPassword, hashedPassword))
// console.log(bcrypt.compareSync('wrongPassword', hashedPassword))

// encryption
// two way process where data is 'locked' in an encrypted string using a 'key'
    // that key can also remove the data from the string
 const cryptoJs = require('crypto-js')

 const stringToEncrypt = 'hello i am a secret message'

 const encryptionKey = 'myKey'

 // AES - Advanced Encryption Standard
 myEncryption = cryptoJs.AES.encrypt(stringToEncrypt, encryptionKey)
 console.log(myEncryption.toString())
 const decryptedMessage = cryptoJs.AES.decrypt(myEncryption.toString(), encryptionKey)
 console.log(decryptedMessage.toString(cryptoJs.enc.Utf8))
