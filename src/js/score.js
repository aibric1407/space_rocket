/**
 * @class Score
 * @description Score class. Contains all properties and methods for state and control of score
 */
export default class Score {
  constructor(game) {
    this.x = 20;
    this.y = 20;
    this.text = "SCORE: ";
    this.value = 0;
  }

  draw(game) {
    // draw score
    game.ctx.font = "16px Arial";
    game.ctx.fillStyle = "#FFF";
    game.ctx.fillText(this.text + this.value, this.x, this.y);
  }
}
