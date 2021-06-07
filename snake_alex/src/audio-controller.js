export default class AudioController {
  constructor() {
    this._mainTrack = new Audio("./assets/overworld.mp3");
    this._mainTrack.volume=0;
    this._eatTrack = new Audio("./assets/eat.mp3");
    this._gameOverTrack = new Audio("./assets/game_over.mp3");
  }

  playMainTrack() {
    this._mainTrack.play();
  }

  stopMainTrack() {
    this._mainTrack.currentTime = 0;
    this._mainTrack.pause();
  }

  playEat() {
    this._eatTrack.play();
  }

  playGameOver() {
    this.stopMainTrack();
    this._gameOverTrack.play();
  }
}
