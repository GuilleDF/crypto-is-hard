const aes256 = require('aes256');

const key = 'taxfix';
const plaintext = 'this should be more secure!';

const encryptedPlainText = aes256.encrypt(key, plaintext);
console.log('Encrypted:', encryptedPlainText);
const decryptedPlainText = aes256.decrypt(key, encryptedPlainText);
console.log('Decrypted:', decryptedPlainText);
