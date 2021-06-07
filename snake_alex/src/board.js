import Position from "./position.js";

export default class Board {



  constructor(width, height, gridSize) {
    this._dimension = new Position(width, height);
    this._gridSize = gridSize;
  }

  getDimensions() {
    return {
      width: this._dimension.x,
      height: this._dimension.y,
    };
  }

  getGridSize() {
    return this._gridSize;
  }

}
