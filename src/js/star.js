/**
 * @class Star
 * @description Star class. Contains all properties and methods for state and control of stars
 * @param {number} id
 */
export default class Score {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.radius = 1;
    this.speed = 10;
    this.active = true;
  }

  draw(game) {
    if (!this.active) {
      return;
    }
    // draw stars
    this.y += this.speed;
    game.ctx.beginPath();
    game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    game.ctx.fillStyle = "yellow";
    game.ctx.fill();
    game.ctx.closePath();
  }
}
