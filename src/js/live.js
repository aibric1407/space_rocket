import Text from "./text.js";
/**
 * @class Live
 * @description Live class. Extends text class
 */
export default class Live extends Text {
  constructor(game) {
    super(game.canvas.width - 100, 20, "LIVES: ", 3);
  }
}
