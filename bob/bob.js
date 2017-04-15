class Bob {
  constructor() {}

  hey(something) {
    something = something.trim().split(',').join('');
    if (!something) return 'Fine. Be that way!';

    if (something.toUpperCase() === something &&
        something.match(/[a-z]/i)) {
      return 'Whoa, chill out!';
    } else if (something.endsWith('?')) {
      return 'Sure.'
    } else {
      return 'Whatever.';
    }
  }
}

module.exports = Bob;
