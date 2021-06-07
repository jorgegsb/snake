import GameController from './game-controller.js'

/**
 * Funtion that initiates the Game
 */
window.onload = function(){
    let game = new GameController();
    const music = new Audio('./assets/overworld.mp3');
    music.play();
    game.start();
    
}