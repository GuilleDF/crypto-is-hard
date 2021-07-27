const { freqAnalysis } = require('./freq-analysis');
const { decrypt } = require('./caesar');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const englishFrequencies = {
  a: 8.34,
  b: 1.54,
  c: 2.73,
  d: 4.14,
  e: 12.6,
  f: 2.03,
  g: 1.92,
  h: 6.11,
  i: 6.71,
  j: 0.23,
  k: 0.87,
  l: 4.24,
  m: 2.53,
  n: 6.8,
  o: 7.7,
  p: 1.66,
  q: 0.09,
  r: 5.68,
  s: 6.11,
  t: 9.37,
  u: 2.85,
  v: 1.06,
  w: 2.34,
  x: 0.2,
  y: 2.04,
  z: 0.06,
};

function crackCaesar(ciphertext) {
  function compareFreqs(baseFreq, newFreq) {
    const baseFreqDiff = Object.fromEntries(
      Object.entries(baseFreq).map(([letter, freq]) => [
        letter,
        Math.abs(englishFrequencies[letter] - freq),
      ])
    );
    const newFreqDiff = Object.fromEntries(
      Object.entries(newFreq).map(([letter, freq]) => [
        letter,
        Math.abs(englishFrequencies[letter] - freq),
      ])
    );

    let numLowerValues = 0;
    let numGreaterValues = 0;
    for (const letter of alphabet.split('')) {
      if (newFreqDiff[letter] < baseFreqDiff[letter]) {
        numLowerValues++;
      }
      if (newFreqDiff[letter] > baseFreqDiff[letter]) {
        numGreaterValues++;
      }
    }

    return numLowerValues > numGreaterValues;
  }

  let bestFreq = freqAnalysis(ciphertext);
  let bestKey = 0;
  for (const possibleKey of Array.from({ length: 26 }).map((_, i) => i)) {
    const possibleMessage = decrypt(possibleKey, ciphertext);
    const freqs = freqAnalysis(possibleMessage);
    if (compareFreqs(bestFreq, freqs)) {
      bestFreq = freqs;
      bestKey = possibleKey;
    }
  }

  return decrypt(bestKey, ciphertext);
}

function crackVigenere(ciphertext) {
  function splitByPeriod(text, period) {
    return text.split('').reduce((acc, cur, i) => {
      const index = i % period;
      if (!acc[index]) {
        acc[index] = '';
      }
      acc[index] += cur;
      return acc;
    }, []);
  }

  function joinTexts(texts) {
    let result = '';
    for (let i = 0; i < texts[0].length; i++) {
      for (const text of texts) {
        if (text[i]) {
          result += text[i];
        }
      }
    }

    return result;
  }

  for (let keyLength of Array.from({ length: 5 }).map((_, i) => i + 3)) {
    console.log('');
    console.log('Trying with key length: ', keyLength);
    const splitTexts = splitByPeriod(ciphertext, keyLength);
    const crackedTexts = splitTexts.map(crackCaesar);
    const finalResult = joinTexts(crackedTexts);
    console.log('Possible decryption: ', finalResult);
  }
}

module.exports = {
  crackCaesar,
  crackVigenere,
};
