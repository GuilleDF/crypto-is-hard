// const { encrypt, decrypt } = require('./caesar');

// const ciphertext = encrypt(12, 'hi everybody');
// console.log('Encrypted:', ciphertext);

// const message = decrypt(12, ciphertext);

// console.log('Decrypted:', message);

// const { printFreqAnalysis } = require('./freq-analysis');
// const longText = require('./long-text');

// printFreqAnalysis(longText);
// const ciphertext = encrypt(12, longText);
// console.log('');
// printFreqAnalysis(ciphertext);

// const { encrypt, decrypt } = require('./vigenere');

// const ciphertext = encrypt('taxfix', 'crypto is hard');
// console.log('Encrypted:', ciphertext);

// const message = decrypt('taxfix', ciphertext);
// console.log('Decrypted:', message);

// const { printFreqAnalysis } = require('./freq-analysis');
// const longText = require('./long-text');

// printFreqAnalysis(longText);
// const ciphertext = encrypt('taxfix', longText);
// console.log('');
// printFreqAnalysis(ciphertext);

// const { encrypt, decrypt } = require('./caesar');
// const longText = require('./long-text');
// const { crackCaesar } = require('./freq-crack');
// const ciphertext = encrypt(12, longText);
// const deciphered = crackCaesar(ciphertext);
// console.log('Possible decryption: ', deciphered);

// const { encrypt, decrypt } = require('./vigenere');
// const longText = require('./long-text');
// const { crackCaesar } = require('./freq-crack');
// const ciphertext = encrypt('taxfix', longText);
// const deciphered = crackCaesar(ciphertext);
// console.log('Possible decryption: ', deciphered);

const { encrypt, decrypt } = require('./vigenere');
const longText = require('./long-text');
const { crackVigenere } = require('./freq-crack');
const ciphertext = encrypt('taxfix', longText);
crackVigenere(ciphertext);
