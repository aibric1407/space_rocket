import Shape from "./shape.js";

/**
 * @class Image
 * @description Image class. Extends shape and contains img, width and height properties. This class represent image elements on canvas
 */
export default class Image extends Shape {
  constructor(x, y, speed, img, width, height) {
    super(x, y, speed);
    this.img = img;
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("IMAG DRAW");
  }

  /**
   * @function getImage
   * @description Getter for img
   */
  getImage() {
    return this.img;
  }
  /**
   * @function getWidth
   * @description Getter for width
   */
  getWidth() {
    return this.width;
  }
  /**
   * @function getHeight
   * @description Getter for height
   */
  getHeight() {
    return this.height;
  }
}
