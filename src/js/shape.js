import Position from "./position.js";

/**
 * @class Shape
 * @description Shape class. Extends position, contains speed, active and visible properties.
 */
export default class Shape extends Position {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.speed = speed;
    this.active = true;
    this.visible = true;
  }

  /**
   * @function getSpeed
   * @description Getter for speed
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * @function isVisible
   * @description Getter for visible
   */
  isVisible() {
    return this.visible;
  }

  /**
   * @function isActive
   * @description Getter for active
   */
  isActive() {
    return this.active;
  }

  /**
   * @function setVisible
   * @description Setter for visible
   */
  setVisible(state) {
    this.visible = state;
  }

  /**
   * @function setActive
   * @description Setter for active
   */
  setActive(state) {
    this.active = state;
  }
}
