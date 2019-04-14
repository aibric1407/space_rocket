import Positions from "./position.js";

/**
 * @class Text
 * @description Text class. Extends position class and contains text and value properties and draw method.
 */
export default class Text extends Positions {
  constructor(x, y, text, value) {
    super(x, y);
    this.text = text;
    this.value = value;
  }
  /**
   * @function draw
   * @description Draws text box on canvas on position x, y
   */
  draw(game) {
    // draw text box
    game.ctx.font = "16px Arial";
    game.ctx.fillStyle = "#FFF";
    game.ctx.fillText(
      this.getText() + this.getValue(),
      this.getX(),
      this.getY()
    );
  }

  /**
   * @function getText
   * @description Getter for text
   */
  getText() {
    return this.text;
  }

  /**
   * @function getValue
   * @description Getter for value
   */
  getValue() {
    return this.value;
  }

  /**
   * @function setText
   * @description Setter for text
   */
  setText(text) {
    this.text = text;
  }

  /**
   * @function setValue
   * @description Setter for value
   */
  setValue(value) {
    this.value = value;
  }
}
