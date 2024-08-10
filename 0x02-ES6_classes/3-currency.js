class Currency {
  constructor(code, name) {
    this.code = code;
    this.code = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  displayFulCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
