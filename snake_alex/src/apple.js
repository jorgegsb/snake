import Position from "./position.js";
import { SpriteManager } from "./sprite-manager.js";

export default class Apple {
  constructor(x, y) {
    this.position = new Position(x, y);
  }

  getSprite() {
    return SpriteManager.apple;
  }

  getPosition() {
    return this.position;
  }
}
