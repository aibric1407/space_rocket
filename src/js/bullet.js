import Shape from "./shape.js";
/**
 * @class Bullet
 * @description Bullet class. Extends shape class and Contains id property
 */
export default class Bullet extends Shape {
  constructor(id, game) {
    super(
      game.space_ship.x + game.space_ship.width / 2,
      game.space_ship.y,
      15,
      2
    );
    this.id = id;
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
      this.setY(this.getY() - this.getSpeed());
      game.ctx.beginPath();
      game.ctx.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI * 2);
      game.ctx.fillStyle = color;
      game.ctx.fill();
      game.ctx.closePath();
      console.log(this);
    }
  }

  /**
   * @function getId
   * @description Getter for id
   */
  getId() {
    return this.id;
  }
}
