import Graphic from "./graphic.js";

/**
 * @class Star
 * @description Star class. Extends graphic class
 * @param {number} id
 */
export default class Star extends Graphic {
  constructor(x, y) {
    super(x, y, 15, 2);
  }
}
