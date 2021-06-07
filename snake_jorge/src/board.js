import Position from './position.js';


export default class Board {

    constructor(x, y, width, height) {
        this._positionBoard = new Position(x, y);
        this._width = width;
        this._height = height;


    }

    get positionBoardX() {

        return this._positionBoard._x;

    }

    get positionBoardY() {

        return this._positionBoard._y;
    }

    get width() {

        return this._width;
    }

    get height() {

        return this._height;
    }
}