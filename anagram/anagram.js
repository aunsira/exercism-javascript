class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  matches(...words) {
    if (!words[1]) words = words[0];

    if (typeof words === 'object') {
      return words.filter(w => { return this.isTheSameWord(w); });
    } else {
      let mockArr = [];
      if (this.isTheSameWord(words)) mockArr.push(words);
      return mockArr;
    }
  }

  isTheSameWord(w) {
    return this.cleanUpWord(w).toString() === this.cleanUpWord(this.word).toString()
             && w.toLowerCase() !== this.word
  }

  cleanUpWord(word) {
    return word.toLowerCase().split('').sort();
  }
}

module.exports = Anagram;
