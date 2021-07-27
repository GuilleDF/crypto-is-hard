const { encrypt, decrypt } = require('../src/vigenere');
const longText = require('../src/long-text');
const { crackVigenere } = require('../src/freq-crack');
const ciphertext = encrypt('taxfix', longText);
crackVigenere(ciphertext);
