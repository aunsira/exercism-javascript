class Isogram {
  constructor(word) {
    this.word = word
      .toLowerCase()
      .split('')
      .filter(this.lettersOnly);
  }

  lettersOnly(char) {
    return char.match(/(?!\s|\-)\W|[a-z]/g);
  }

  isIsogram() {
    let listWord = {};

    this.word.map(char => {
      listWord[char] ? listWord[char]++ : listWord[char] = 1;
    });

    let result = true;
    Object.keys(listWord).forEach(char => {
      if (listWord[char] > 1) result = false;
    });
    return result;
  }
}

module.exports = Isogram;
