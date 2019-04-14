/**
 * @class Position
 * @description Position class. Contains x and y properties which represent position on x and y axis
 */
export default class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @function setX
   * @description Set x position
   */
  setX(x) {
    this.x = x;
  }

  /**
   * @function setY
   * @description Set y position
   */
  setY(y) {
    this.y = y;
  }

  /**
   * @function getX
   * @description Getter for x position
   */
  getX(x) {
    return this.x;
  }

  /**
   * @function getY
   * @description Getter for y position
   */
  getY(y) {
    return this.y;
  }
}
