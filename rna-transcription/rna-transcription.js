class DnaTranscriber {

  constructor() {
    this.dnaToRna = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U',
    };
  }

  toRna(strand) {
    return [...strand].map(c => {
      if (!this.dnaToRna[c]) throw new Error('Invalid input');
      return this.dnaToRna[c];
    }).join('');
  }
}

module.exports = DnaTranscriber;
