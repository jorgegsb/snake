export default class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(position, gridSize) {
    return (
      this.x + gridSize > position.x &&
      this.x < position.x + gridSize &&
      this.y + gridSize > position.y &&
      this.y < position.y + gridSize
    );
  }

}
