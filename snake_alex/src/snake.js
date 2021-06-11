import Position from "./position.js";
import { SpriteManager } from "./sprite-manager.js";

export default class Snake {
  constructor(position, size, bodySize, direction) {
    this._bodySize = bodySize;
    this._direction = direction;
    this._body = [];
    this._directionHasChanged = false;
    this._previousDirection = direction;
    this._head = this._createSnakePieze(
      position,
      this._getHeadSpriteFromDirection(this._direction)
    );
    this._OPPOSITE_DIRECTIONS = {
      up: "down",
      right: "left",
      left: "right",
      down: "up",
    };
    for (let i = 1; i < size; i++) {
      const bodyPosition = new Position(position.x - bodySize * i, position.y);
      this._body.push(
        this._createSnakePieze(bodyPosition, this._getSpriteFromDirection())
      );
    }
  }

  _createSnakePieze(position, spritePosition) {
    return {
      position,
      spritePosition,
      direction: this._direction
    };
  }

  retrieve() {
    return [this._head].concat(this._body);
  }

  getCurrentDirection() {
    return this._direction;
  }

  changeDirection(direction) {
        if (direction !== this._OPPOSITE_DIRECTIONS[this._direction] && direction !== this._direction) {
            this._previousDirection = this._direction;
            this._direction = direction;
            this._directionHasChanged = true;
        }
  }

  hasCollisionItself(){
    let hasCollision = false;
    let i =0;
    while(!hasCollision && i < this._body.length){
      hasCollision = this._head.position.equals(this._body[i].position, this._bodySize);
      i++;
    }
    return hasCollision;
  }

  _getSpriteFromDirection(){
    let newSprite =  SpriteManager['body_' + this._direction];
    if(this._directionHasChanged){
      this._directionHasChanged = false;
      newSprite = SpriteManager['bodyChangeDirection_' + this._previousDirection + '_' + this._direction];
    }
    return newSprite;
  }

  _getHeadSpriteFromDirection(direction){
    return SpriteManager['headPosition_' + direction];
  }

  _getTailSpriteFromDirection(direction){
    return SpriteManager['tailPosition_' + direction];
  }

  move(limits, grow) {
    const oldHeadPosition = this._head.position;
    this._head.spritePosition = this._getSpriteFromDirection();
    this._head.direction = this._direction;
    this._body.unshift(this._head);
    if(!grow) {
      this._body.pop();
      this._body[this._body.length-1].spritePosition = this._getTailSpriteFromDirection(this._body[this._body.length-1].direction);
    }
    let newHeadPosition, newY, newX;
    switch (this._direction) {
      case "up":
        newY = oldHeadPosition.y - this._bodySize;
        newHeadPosition = new Position(
          oldHeadPosition.x,
          newY < 0 ? limits.height : newY
        );
        break;
      case "down":
        newY = oldHeadPosition.y + this._bodySize;
        newHeadPosition = new Position(
          oldHeadPosition.x,
          newY >= limits.height ? 0 : newY
        );
        break;
      case "right":
        newX = oldHeadPosition.x + this._bodySize;
        newHeadPosition = new Position(
          newX >= limits.width ? 0 : newX,
          oldHeadPosition.y
        );
        break;
      case "left":
        newX = oldHeadPosition.x - this._bodySize;
        newHeadPosition = new Position(
          newX < 0 ? limits.width : newX,
          oldHeadPosition.y
        );
        break;
    }

    this._head = this._createSnakePieze(newHeadPosition, this._getHeadSpriteFromDirection(this._direction));
  }
}
