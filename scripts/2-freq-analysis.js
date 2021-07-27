const { printFreqAnalysis } = require('../src/freq-analysis');
const longText = require('../src/long-text');

console.log('Frequencies on normal text:');
printFreqAnalysis(longText);
