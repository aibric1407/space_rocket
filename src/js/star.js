import Shape from "./shape.js";

/**
 * @class Star
 * @description Star class. Extends shape class
 * @param {number} id
 */
export default class Star extends Shape {
  constructor(x, y) {
    super(x, y, 15, 2);
  }

  /**
   * @class draw
   * @description Draws shape on canvas for active objects
   */
  draw(game, color) {
    if (!this.isActive()) {
      return;
    }
    // handle exit from screen
    if (this.getY() < 0) {
      this.setVisible(false);
    }
    if (this.isVisible()) {
      this.setY(this.getY() + this.getSpeed());
      game.ctx.beginPath();
      game.ctx.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI * 2);
      game.ctx.fillStyle = color;
      game.ctx.fill();
      game.ctx.closePath();
    }
  }
}
