import Position from './position.js';

export default class Snake {
    constructor(x, y, width, height, size) {
        this._positionSnake = new Position(x, y);
        this._bodyWidth = width;
        this._bodyHeight = height;
        this._snake = [];
        this._bodySize = size;

    }

    get positionSnakeX() {

        return this._positionSnake._x;

    }

    get positionSnakeY() {

        return this._positionSnake._y;
    }

    get bodyWidth() {

        return this._bodyWidth;
    }

    get bodyHeight() {

        return this._bodyHeight;
    }
    get bodySize() {
        return this._bodySize;
    }
    get snake() {
        return this._snake;
    }



}