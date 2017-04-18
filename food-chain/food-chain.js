class FoodChain {
  constructor() {
    this.animal = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat','cow', 'horse' ];
    this.animalDesc = {
      'fly': '',
      'spider': "It wriggled and jiggled and tickled inside her.\n",
      'bird': "How absurd to swallow a bird!\n",
      'cat': "Imagine that, to swallow a cat!\n",
      'dog': "What a hog, to swallow a dog!\n",
      'goat': "Just opened her throat and swallowed a goat!\n",
      'cow': "I don't know how she swallowed a cow!\n",
      'horse': "She's dead, of course!\n"
    };
  }

  verse(numberVerse) {
    let lyrics = '';
    for (var i = numberVerse - 1; i >= 0; i--) {
      let lyricsEachAnimal = '';
      // Intro
      if (i === numberVerse-1) {
        lyricsEachAnimal += `I know an old lady who swallowed a ${this.animal[i]}.\n`;
        lyricsEachAnimal += this.animalDesc[this.animal[i]];
      }

      // chorus
      if (this.animalDesc[this.animal[i]] && i !== 0 && this.animal[i] !== 'hourse') {
        if (this.animal[i] === 'bird' || this.animal[i] === 'cat' || this.animal[i] === 'dog' || this.animal[i] === 'goat' || this.animal[i] === 'cow') {
          lyricsEachAnimal += `She swallowed the ${this.animal[i]} to catch the ${this.animal[i-1]}`;
          if (this.animal[i] === 'cat' || this.animal[i] === 'dog' || this.animal[i] === 'goat' || this.animal[i] === 'cow') {
            lyricsEachAnimal += ".";
            lyricsEachAnimal += "\n";
          }
          if (this.animal[i] === 'bird') {
            lyricsEachAnimal += ` that wriggled and jiggled and tickled inside her.\n`;
          }
        }
      }

      if (i === 0 && numberVerse > 1) {
        lyricsEachAnimal += `She swallowed the ${this.animal[i+1]} to catch the ${this.animal[i]}.\n`;
      }
      if (i === 0) {
        lyricsEachAnimal += `I don't know why she swallowed the fly. Perhaps she'll die.\n`;
      }

      lyrics += lyricsEachAnimal;
      if (this.animal[i] === 'horse') break;
    }
    return lyrics;
  }

  verses(v1, v2) {
    let result = '';
    for (let i = v1; i <= v2; i++) {
      result += this.verse(i) + "\n";
    }
    return result;
  }
}

module.exports = FoodChain;
