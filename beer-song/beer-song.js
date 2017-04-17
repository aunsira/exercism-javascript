class BeerSong {
  constructor() {}

  verse(remain) {
    let first_phase = `${this.bottles(remain).capitalize()} of beer on the wall, ${this.bottles(remain)} of beer.`;
    let second_phase = this.find_second_phase(remain);
    return `${first_phase}\n${second_phase}\n`
  }

  find_second_phase(remain) {
    let phase = '';
    if (remain === 0) {
      phase = 'Go to the store and buy some more'
    } else {
      phase = `Take ${remain == 1 ? 'it' : 'one'} down and pass it around`
    }
    return phase += `, ${this.bottles(remain - 1)} of beer on the wall.`
  }

  bottles(remain) {
    switch (remain) {
      case -1:
        return '99 bottles';
        break;
      case 0:
        return 'no more bottles';
        break;
      case 1:
        return '1 bottle';
        break;
      default:
        return `${remain} bottles`;
    }
  }

  sing(verse1, verse2 = 0) {
    let result = '';
    for (var i = verse1; i >= verse2; i--) {
      result += this.verse(i) + "\n";
    }
    return result.slice(0,-1);
  }
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = BeerSong;
