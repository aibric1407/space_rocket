import Image from "./image.js";
/**
 * @class Enemy
 * @description Enemy class. Extends Image class
 */

export default class Enemy extends Image {
  constructor(x, y) {
    let width = 25;
    let height = 25;
    let speed = 2;
    super(x, y, speed, document.getElementById("enemy"), width, height);
  }

  /**
   * @function draw
   * @description Draw enemy if it is active and update its y position
   */
  draw(game) {
    if (!this.isActive()) {
      return;
    }
    // draw enemy
    this.setY(this.getY() + this.getSpeed());
    game.ctx.drawImage(
      this.getImage(),
      this.getX(),
      this.getY(),
      this.getWidth(),
      this.getHeight()
    );
  }
}
