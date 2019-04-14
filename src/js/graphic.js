import Shape from "./shape.js";

/**
 * @class Graphic
 * @description Graphic class. Extends shape and contains radius property
 */
export default class Graphic extends Shape {
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
