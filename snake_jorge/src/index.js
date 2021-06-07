import CanvasDrawEngine from "./canvas-draw-engine.js";
import GameController from "./game-controller.js";


const firstGame = new GameController(new CanvasDrawEngine(600, 600));

firstGame.start();