const { encrypt, decrypt } = require('../src/vigenere');

const ciphertext = encrypt('taxfix', 'crypto is hard');
console.log('Encrypted:', ciphertext);

const message = decrypt('taxfix', ciphertext);
console.log('Decrypted:', message);
