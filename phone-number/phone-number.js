class PhoneNumber {
  constructor(phone) {
    this.phone = phone.replace(/[^\w]/gi, '');
  }

  number() {
    return this.invalidPhoneNumber() ? '0000000000' : this.phone;
  }

  areaCode() {
    return this.phone.substr(0,3);
  }

  toString() {
    return `(${this.areaCode()}) ${this.phone.substr(3, 3)}-${this.phone.substr(6, 4)}`
  }

  invalidPhoneNumber() {
    if (this.exceedDigitNumber()) return true;

    if (this.phone.length === 11) {
      if (this.phone.startsWith('1')) {
        this.phone = this.phone.substr(1);
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  exceedDigitNumber() {
    return this.phone.length >= 12 || this.phone.length <= 9
  }
}

module.exports = PhoneNumber;
