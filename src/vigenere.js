const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
  encrypt(key, message) {
    const filteredMessage = message
      .toLowerCase()
      .split('')
      .filter((letter) => letter.match(/[a-z]/));

    const fullKey =
      key.repeat(filteredMessage.length / key.length) +
      key.slice(0, filteredMessage.length % key.length);

    return filteredMessage
      .map((letter, i) => {
        const originalIndex = alphabet.indexOf(letter);
        const keyIndex = alphabet.indexOf(fullKey[i]);
        const newIndex = (originalIndex + keyIndex) % alphabet.length;
        return alphabet[newIndex];
      })
      .join('');
  },

  decrypt(key, ciphertext) {
    const filteredMessage = ciphertext
      .toLowerCase()
      .split('')
      .filter((letter) => letter.match(/[a-z]/));

    const fullKey =
      key.repeat(filteredMessage.length / key.length) +
      key.slice(0, filteredMessage.length % key.length);

    return filteredMessage
      .map((letter, i) => {
        const originalIndex = alphabet.indexOf(letter);
        const keyIndex = alphabet.indexOf(fullKey[i]);
        const newIndex =
          (originalIndex + alphabet.length - keyIndex) % alphabet.length;
        return alphabet[newIndex];
      })
      .join('');
  },
};
