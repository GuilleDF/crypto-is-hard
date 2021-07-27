const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function freqAnalysis(text) {
  const totalLetters = text.length;
  const data = {};
  for (const letter of alphabet.split('')) {
    const numberOfOcurrences = text
      .split('')
      .filter((l) => l === letter).length;

    data[letter] = (100 * numberOfOcurrences) / totalLetters;
  }
  return data;
}

function printFreqAnalysis(text) {
  const data = freqAnalysis(text);

  for (const [letter, appearance] of Object.entries(data)) {
    console.log(`${letter}:`, '.'.repeat(Math.floor(appearance * 10)));
  }
}

function printFreqAnalysisSorted(text) {
  const data = freqAnalysis(text);

  for (const [letter, appearance] of Object.entries(data).sort(
    ([_a, a], [_b, b]) => b - a
  )) {
    console.log(`${letter}:`, '.'.repeat(Math.floor(appearance * 10)));
  }
}

module.exports = {
  freqAnalysis,
  printFreqAnalysis,
  printFreqAnalysisSorted,
};
