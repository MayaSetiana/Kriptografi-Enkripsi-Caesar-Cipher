/**
 * @param {number} shift
 * @param {string[]} plaintextAlphabet
 */
const generateCaesarCipher = (shift, plaintextAlphabet) => {
  const cipherAlphabet = plaintextAlphabet.map((_symbol, index) => {
    const newIndex = (index + shift) % plaintextAlphabet.length;
    return plaintextAlphabet[newIndex];
  });

  const makeTranslator = (sourceAlphabet, targetAlphabet) => (message) => {
    return message
      .toLowerCase()
      .split("")
      .map((symbol) => {
        const index = sourceAlphabet.indexOf(symbol);
        return targetAlphabet[index];
      })
      .join("");
  };

  return {
    cipherAlphabet,
    encipher: makeTranslator(plaintextAlphabet, cipherAlphabet),
    decipher: makeTranslator(cipherAlphabet, plaintextAlphabet),
  };
};

module.exports = {
  generateCaesarCipher,
};
