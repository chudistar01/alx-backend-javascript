class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
