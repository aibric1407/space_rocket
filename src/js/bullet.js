/**
 * @class Bullet
 * @description Bullet class. Contains all properties and methods for state and control of bullets
 * @param {number} id
 */
export default class Bullet {
  constructor(id, game) {
    this.x = game.space_ship.x + game.space_ship.width / 2;
    this.y = game.space_ship.y;
    this.speed = 15;
    this.radius = 2;
    this.id = id;
    this.visible = true;
    this.active = true;
  }

  draw(game) {
    if (!this.active) {
      return;
    }
    // handle exit from screen
    if (this.y < 0) {
      this.visible = false;
    }
    if (this.visible) {
      this.y -= this.speed;
      game.ctx.beginPath();
      game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      game.ctx.fillStyle = "#fff";
      game.ctx.fill();
      game.ctx.closePath();
    }
  }
}
