const { encrypt, decrypt } = require('../src/caesar');

const ciphertext = encrypt(12, 'hi everybody');
console.log('Encrypted:', ciphertext);

const message = decrypt(12, ciphertext);

console.log('Decrypted:', message);
