import Text from "./text.js";
/**
 * @class Score
 * @description Score class. Extends text class
 */
export default class Score extends Text {
  constructor(game) {
    super(20, 20, "SCORE: ", 0);
  }
}
