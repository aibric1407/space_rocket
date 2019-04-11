/**
 * @class Enemy
 * @description Enemy class. Contains all properties and methods for state and control of enemies
 */

export default class Enemy {
  constructor(ctx, x, y, speed) {
    this.img = document.getElementById("enemy");
    this.width = 25;
    this.height = 25;
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.active = true;
  }

  draw(game) {
    if (!this.active) {
      return;
    }
    // draw enemy
    this.y += this.speed;
    //this.x += this.direction * this.speed;
    game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
