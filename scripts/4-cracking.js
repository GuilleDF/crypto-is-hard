const { encrypt, decrypt } = require('../src/caesar');
const longText = require('../src/long-text');
const { crackCaesar } = require('../src/freq-crack');

const ciphertext = encrypt(12, longText);
const deciphered = crackCaesar(ciphertext);
console.log('Possible decryption: ', deciphered);
