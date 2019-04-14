import Image from "./image.js";
/**
 * @class Ship
 * @description Space ship class. Extends image class.
 */
export default class Ship extends Image {
  constructor(game) {
    let width = 50;
    let height = 50;
    let speed = 5;
    super(
      game.canvas.width / 2 - width / 2,
      game.canvas.height - height,
      speed,
      document.getElementById("space_ship"),
      width,
      height
    );
  }

  draw(game) {
    // draw space ship
    if (!this.isActive()) {
      return;
    }
    if (
      game.rightPressed &&
      this.getX() < game.canvas.width - this.getWidth()
    ) {
      this.setX(this.getX() + this.getSpeed());
    }
    if (game.leftPressed && this.getX() > 0) {
      this.setX(this.getX() - this.getSpeed());
    }
    if (game.upPressed && this.getY() > 0) {
      this.setY(this.getY() - this.getSpeed());
    }
    if (
      game.downPressed &&
      this.getY() < game.canvas.height - this.getHeight()
    ) {
      this.setY(this.getY() + this.getSpeed());
    }
    game.ctx.drawImage(
      this.getImage(),
      this.getX(),
      this.getY(),
      this.getWidth(),
      this.getHeight()
    );
  }
}
