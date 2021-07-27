const aes256 = require('aes256');
const { printFreqAnalysisSorted } = require('../src/freq-analysis');
const longText = require('../src/long-text');

const key = 'taxfix';

const encryptedPlainText = aes256.encrypt(key, longText);
printFreqAnalysisSorted(encryptedPlainText);
