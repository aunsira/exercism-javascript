class Gigasecond {

  constructor(time) {
    this.time = time;
  }

  date() {
    return new Date(this.time.getTime() + Math.pow(10, 9) * 1000);
  }
}

module.exports = Gigasecond;
