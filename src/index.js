import Game from "./js/game.js";

window.onload = function(e) {
  // Define canvas elements
  var game = new Game();
  // Handle movements
  document.addEventListener(
    "keydown",
    e => {
      game.keyDownHandler(e);
    },
    false
  );
  document.addEventListener(
    "keyup",
    e => {
      game.keyUpHandler(e);
    },
    false
  );
  //document.addEventListener("mousemove", mouseMoveHandler, false);
};
