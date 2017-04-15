class Pangram {

  constructor(sentence) {
    this.sentence = sentence.toLowerCase().split('').filter((arr) => arr != ' ');
  }

  isPangram() {
    if (!this.sentence.length > 0) return false;

    let hash = {
      'a': 0,'b': 0,'c': 0,'d': 0,'e': 0,'f': 0,
      'g': 0,'h': 0,'i': 0,'j': 0,'k': 0,'l': 0,
      'm': 0,'n': 0,'o': 0,'p': 0,'q': 0,'r': 0,
      's': 0,'t': 0,'u': 0,'v': 0,'w': 0,'x': 0,
      'y': 0,'z': 0
    };

    this.sentence.forEach(function(val) {
      if (hash[val] === 0) {
        hash[val]++;
      }
    });

    let result = true;
    Object.entries(hash).forEach(
      function(key) { if (key[1] === 0) result = false; }
    );
    return result;
  }
}
module.exports = Pangram;
