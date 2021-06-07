import CanvasDrawEngine from "./canvas-draw-engine.js";
import Board from "./board.js";
import { SpriteManager } from "./sprite-manager.js";
import Snake from './snake.js';
import Position from "./position.js";
import Apple from "./apple.js";
import AudioController from "./audio-controller.js";

export default class GameController {
  constructor() {
    this._WIDTH = 600;
    this._HEIGHT = 600;
    this._GRID_SIZE = SpriteManager.tileSize;
    this._FRAME_TIME = 10;
    this._APPLE_GENERATION_TIME = 1000;
    this._drawEngine = new CanvasDrawEngine("snake", this._WIDTH, this._HEIGHT);
    this._board = new Board(this._WIDTH, this._HEIGHT, this._GRID_SIZE);
    this._snake = new Snake(new Position(Math.round(this._WIDTH/2), Math.round(this._HEIGHT/2)), 5, this._GRID_SIZE, 'right');
    this._apples = [];
    this._frameCount = this._FRAME_TIME;
    this._audioController = new AudioController();
    this._registerKeyBoardEvent();
    setInterval( () => this._apples.push(this._generateApple()), this._APPLE_GENERATION_TIME);
    this._audioController.playMainTrack()
  }

  _registerKeyBoardEvent() {
    window.addEventListener("keydown", (event) => {
      let direction = this._snake.getCurrentDirection();
      switch (event.key) {
        case "ArrowUp":
          direction = "up";
          break;
        case "ArrowDown":
          direction = "down";
          break;
        case "ArrowLeft":
          direction = "left";
          break;
        case "ArrowRight":
          direction = "right";
          break;
      }
      this._snake.changeDirection(direction);
    });
  }

  _generateApple(){
    const x = Math.floor(Math.random() * (this._WIDTH));
    const y = Math.floor(Math.random() * (this._HEIGHT));
    return new Apple(x,y);
  }

  _manageAppleCollision(){
    const snakeHead = this._snake.retrieve()[0];
    let hasCollision = false;
    let i=0;
    while(!hasCollision && i<this._apples.length){
      hasCollision = snakeHead.position.equals(this._apples[i].getPosition(), this._GRID_SIZE);
      i++;
    }
    if(hasCollision) {
      this._apples.splice(i-1,1);
      this._audioController.playEat();
    }
    return hasCollision;
  }

  _isGameOver(){
    return this._snake.hasCollisionItself();
  }

  start() {
    if(!this._isGameOver()){
      requestAnimationFrame(this.start.bind(this));
      if (!--this._frameCount) {
        const snakeGrow = this._manageAppleCollision();
        this._snake.move(this._board.getDimensions(), snakeGrow);
        this._drawEngine.clear();
        this._drawEngine.draw(this._board, this._snake, this._apples);
        this._frameCount = this._FRAME_TIME;
      }
    }else{
      this._drawEngine.drawGameOver();
      this._audioController.playGameOver();
    }
  }
}
