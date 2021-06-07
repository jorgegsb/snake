import { SpriteManager } from "./sprite-manager.js";

export default class CanvasDrawEngine {
  constructor(id, width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this._context = canvas.getContext("2d");
    document.getElementById(id).appendChild(canvas);
    this._spriteSheetImg = document.createElement("img");
    this._spriteSheetImg.src = SpriteManager.imageURL;
    this._backgroundImg = document.createElement("img");
    this._backgroundImg.src = SpriteManager.backgroundURL;
  }

  draw(board, snake, apples) {
    this._drawBoard(board);
    this._drawSnake(snake, board.getGridSize());
    this._drawApples(apples, board.getGridSize())
  }

  _drawSnake(snake, gridSize) {
    snake.retrieve().forEach((bodyElement) => {
      this._context.drawImage(
        this._spriteSheetImg,
        bodyElement.spritePosition.x,
        bodyElement.spritePosition.y,
        gridSize,
        gridSize,
        bodyElement.position.x,
        bodyElement.position.y,
        gridSize,
        gridSize
      );
    });
  }

  _drawBoard(board) {
    const boardDimensions = board.getDimensions();
    this._context.fillStyle = "transparent";
    this._context.fillRect(0, 0, boardDimensions.width, boardDimensions.height);
    this._context.drawImage(this._backgroundImg,0,0, boardDimensions.width, boardDimensions.height)
  }

  _drawApples(apples, gridSize) {
    apples.forEach((apple) => {
      this._context.drawImage(
        this._spriteSheetImg,
        apple.getSprite().x,
        apple.getSprite().y,
        gridSize,
        gridSize,
        apple.getPosition().x,
        apple.getPosition().y,
        gridSize,
        gridSize
      );
    });
  }

  drawGameOver(){
    this._context.font = "30px Comic Sans MS";
    this._context.fillStyle = "red";
    this._context.textAlign = "center";
    this._context.fillText("GAME OVER", this._width/2, this._height/2);
  }

  clear() {
    this._context.clearRect(0, 0, this._width, this._height);
  }
}
