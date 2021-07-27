const { encrypt, decrypt } = require('../src/vigenere');
const longText = require('../src/long-text');
const { crackCaesar } = require('../src/freq-crack');

const ciphertext = encrypt('taxfix', longText);
const deciphered = crackCaesar(ciphertext);
console.log('Possible decryption: ', deciphered);
