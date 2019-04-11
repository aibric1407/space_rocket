/**
 * @class Ship
 * @description Space ship class. Contains all properties and methods for state and control of space ship
 */
export default class Ship {
  constructor(game) {
    this.img = document.getElementById("space_ship");
    this.width = 50;
    this.height = 50;
    this.x = game.canvas.width / 2 - this.width / 2;
    this.y = game.canvas.height - this.height;
    this.speed = 5;
    this.active = true;
  }

  draw(game) {
    // draw space ship
    if (!this.active) {
      return;
    }
    if (game.rightPressed && this.x < game.canvas.width - this.width) {
      this.x += this.speed;
    }
    if (game.leftPressed && this.x > 0) {
      this.x -= this.speed;
    }
    if (game.upPressed && this.y > 0) {
      this.y -= this.speed;
    }
    if (game.downPressed && this.y < game.canvas.height - this.height) {
      this.y += this.speed;
    }
    game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
