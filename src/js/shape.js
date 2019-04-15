import Graphic from "./graphic.js";

/**
 * @class Shape
 * @description Shape class. Extends graphic and contains radius property. This class represents drawable objects on canvas, like circles, rectangles etc.
 */
export default class Shape extends Graphic {
  constructor(x, y, speed, radius) {
    super(x, y, speed);
    this.radius = radius;
  }

  /**
   * @function getRadius
   * @description Getter for radius
   */
  getRadius() {
    return this.radius;
  }
}
