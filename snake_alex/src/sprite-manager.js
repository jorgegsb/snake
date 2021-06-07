import Position from "./position.js";

const TILE_SIZE = 64;

export const SpriteManager = {
  imageURL: "./assets/snake_sheet.png",
  backgroundURL: './assets/sand_bg.jpg',
  tileSize: TILE_SIZE,
  headPosition_up: new Position(3 * TILE_SIZE, 0),
  headPosition_down: new Position(4 * TILE_SIZE, TILE_SIZE),
  headPosition_right: new Position(4 * TILE_SIZE, 0),
  headPosition_left: new Position(3 * TILE_SIZE, TILE_SIZE),
  tailPosition_up: new Position(3 * TILE_SIZE, 2*TILE_SIZE),
  tailPosition_down: new Position(4 * TILE_SIZE, 3*TILE_SIZE),
  tailPosition_right: new Position(4 * TILE_SIZE, 2*TILE_SIZE),
  tailPosition_left: new Position(3 * TILE_SIZE, 3*TILE_SIZE),
  body_up: new Position(2 * TILE_SIZE, TILE_SIZE),
  body_down: new Position(2 * TILE_SIZE, TILE_SIZE),
  body_left: new Position(TILE_SIZE, 0),
  body_right: new Position(TILE_SIZE, 0),
  bodyChangeDirection_down_left: new Position(2 * TILE_SIZE, 2*TILE_SIZE),
  bodyChangeDirection_right_up: new Position(2 * TILE_SIZE, 2*TILE_SIZE),
  bodyChangeDirection_up_right: new Position(0, 0),
  bodyChangeDirection_left_down: new Position(0, 0),
  bodyChangeDirection_up_left: new Position(2 * TILE_SIZE, 0),
  bodyChangeDirection_right_down: new Position(2 * TILE_SIZE, 0),
  bodyChangeDirection_down_right: new Position(0, TILE_SIZE),
  bodyChangeDirection_left_up: new Position(0, TILE_SIZE),
  apple: new Position(0, 3 * TILE_SIZE),

};
