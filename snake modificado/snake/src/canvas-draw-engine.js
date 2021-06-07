export default class CanvasDrawEngine {

    constructor(height, width) {
        this.locateCanvas("snake");
        this.getCanvas().setAttribute("width", width);
        this.getCanvas().setAttribute("height", height);
        this.canvasC = this.getCanvas();
        this._contextCanvas = this.canvasC.getContext("2d");
        this._movimientoVertical = 0;
        this._movimientoHorizontal = 0;
        this.asignarEvento();
    }



    _createCanvas() {
        let canvas = document.createElement("canvas")
        canvas.setAttribute("id", "canvas");
        return canvas;

    };
    locateCanvas(id) {
        let contenedor = document.getElementById(id);
        contenedor.appendChild(this._createCanvas());
    }



    drawBoard(board) {
        this._contextCanvas.beginPath();
        this._contextCanvas.rect(board.positionBoardX, board.positionBoardY, board.width, board.height);
        this._contextCanvas.strokeStyle = "blue";
        this._contextCanvas.stroke();
        this._contextCanvas.closePath();
    }
    _drawOneBodyPartSnake(snake) {
        this._contextCanvas.beginPath();
        this._contextCanvas.rect(snake.positionSnakeX, snake.positionSnakeY, snake.bodyHeight, snake.bodyWidth);
        this._contextCanvas.fillStyle = "red";
        this._contextCanvas.fill();
        this._contextCanvas.closePath();
    }
    _drawHeadSnake(snake) {
        this._contextCanvas.beginPath();
        this._contextCanvas.rect(snake.positionSnakeX, snake.positionSnakeY, snake.bodyHeight, snake.bodyWidth);
        this._contextCanvas.fillStyle = "blue";
        this._contextCanvas.fill();
        this._contextCanvas.closePath();
    }
    getCanvas() {
        return document.getElementById("canvas");
    }


    asignarEvento() {
        let that = this;
        window.addEventListener("keydown", function(event) {
            let keyCode = event.keyCode;

            switch (keyCode) {
                case 38:
                    that._movimientoVertical = -1;
                    that._movimientoHorizontal = 0;
                    break;
                case 37:
                    that._movimientoHorizontal = -1;
                    that._movimientoVertical = 0;

                    break;
                case 39:
                    that._movimientoHorizontal = 1;
                    that._movimientoVertical = 0;

                    break;
                case 40:
                    that._movimientoVertical = 1;
                    that._movimientoHorizontal = 0;

                    break;
            }

        }, false);
    }
    drawMove(snake, board) {
        window.setInterval(function() {
            this.drawSnake(snake, board);
        }.bind(this), 1000 / 3);

    }

    drawSnake(snake, board) {
        this.clearBoard(board);
        this.drawBoard(board);

        for (let i = 1; i < snake._bodySize; i++) {
            snake._snake[i] = this._drawOneBodyPartSnake(snake);
            snake._positionSnake._y += 25 * this._movimientoVertical;
            snake._positionSnake._x += 25 * this._movimientoHorizontal;
            snake._snake[0] = this._drawHeadSnake(snake);
        }

    }


    clearBoard(board) {
        this._contextCanvas.beginPath();
        this._contextCanvas.clearRect(board.positionBoardX, board.positionBoardY, board.width, board.height);
        this._contextCanvas.closePath();

    }


}