/**
 * @class Score
 * @description Score class. Contains all properties and methods for state and control of score
 */
export default class Live {
  constructor(game) {
    this.x = game.canvas.width - 100;
    this.y = 20;
    this.text = "LIVES: ";
    this.value = 3;
  }

  draw(game) {
    // draw lives
    game.ctx.font = "16px Arial";
    game.ctx.fillStyle = "#FFF";
    game.ctx.fillText(this.text + this.value, this.x, this.y);
  }
}
