const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
  encrypt(key, message) {
    return message
      .toLowerCase()
      .split('')
      .filter((letter) => letter.match(/[a-z]/))
      .map((letter) => {
        const originalIndex = alphabet.indexOf(letter);
        const newIndex = (originalIndex + key) % alphabet.length;
        return alphabet[newIndex];
      })
      .join('');
  },

  decrypt(key, ciphertext) {
    return ciphertext
      .toLowerCase()
      .split('')
      .filter((letter) => letter.match(/[a-z]/))
      .map((letter) => {
        const originalIndex = alphabet.indexOf(letter);
        const newIndex =
          (originalIndex + alphabet.length - key) % alphabet.length;
        return alphabet[newIndex];
      })
      .join('');
  },
};
