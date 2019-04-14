import Graphic from "./graphic.js";
/**
 * @class Bullet
 * @description Bullet class. Extends graphic class and Contains id property
 */
export default class Bullet extends Graphic {
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
   * @function getId
   * @description Getter for id
   */
  getId() {
    return this.id;
  }
}
