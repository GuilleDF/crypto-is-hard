const { encrypt } = require('../src/caesar');
const { printFreqAnalysisSorted } = require('../src/freq-analysis');
const longText = require('../src/long-text');

console.log('Frequencies on normal text:');
printFreqAnalysisSorted(longText);

console.log('');
console.log('Frequencies on ciphertext:');
const ciphertext = encrypt(12, longText);
printFreqAnalysisSorted(ciphertext);
