class Isogram {
  constructor(word) {
    this.word = word
  }

  isIsogram() {
    let listWord = {};

    this.word.toLowerCase().split('').map(cha => {
      listWord[cha] ? listWord[cha]++ : listWord[cha] = 1;
    });

    let result = true;
    Object.keys(listWord).forEach(cha => {
      if (listWord[cha] > 1 && cha !== '-' && cha !== ' ') result = false;
    });
    return result;
  }
}

module.exports = Isogram;
