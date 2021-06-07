import Board from "./board.js";
import Snake from "./snake.js";

export default class GameController {
    constructor(view) {
        this._createBoard(0, 0, 600, 600);
        this._firstCanvasDrawEngine = view;
        this._createSnake(250, 250, 25, 25, 4);
    }

    start() {
        this._firstCanvasDrawEngine.drawMove(this._snake, this._board);
    }
    _createBoard(positionBoardX, positionBoardY, width, height) {
        this._board = new Board(positionBoardX, positionBoardY, width, height);
    }
    _createSnake(positionSnakeX, positionSnakeY, bodyWidth, bodyHeight, size) {
        this._snake = new Snake(positionSnakeX, positionSnakeY, bodyWidth, bodyHeight, size);
    }


}