const { encrypt, decrypt } = require('../src/vigenere');
const { printFreqAnalysisSorted } = require('../src//freq-analysis');
const longText = require('../src/long-text');

console.log('Frequencies on normal text:');
printFreqAnalysisSorted(longText);

console.log('');
console.log('Frequencies on ciphertext:');
const ciphertext = encrypt('taxfix', longText);
printFreqAnalysisSorted(ciphertext);
