import Ship from "./ship.js";
import Live from "./live.js";
import Score from "./score.js";
import Bullet from "./bullet.js";
import Enemy from "./enemy.js";
import Star from "./star.js";

export default class Game {
  constructor() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.bulletIndex = 0;
    this.fps = 60;
    this.enemies = [];
    this.stars = [];
    this.points = 10;

    // Define flags for space ship movement
    this.rightPressed = false;
    this.leftPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.spacePressed = false;

    this.keys_map = {
      left: 37,
      right: 39,
      up: 38,
      down: 40,
      space: 32
    };

    this.bullets = [];
    this.space_ship = new Ship(this);
    this.lives = new Live(this);
    this.score = new Score(this);

    this.intervalHandler = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / this.fps);
  }

  start(game) {}

  /**
   * @function draw
   * @description Draws all elements on screen
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.space_ship.draw(this);
    this.score.draw(this);
    this.lives.draw(this);
    this.bullets.forEach(element => {
      element.draw(this);
    });

    this.enemies.forEach(element => {
      element.draw(this);
    });

    this.stars.forEach(element => {
      element.draw(this);
    });
  }

  /**
   * @function update
   * @description Update game
   */
  update() {
    if (!this.lives.value) {
      alert("GAME OVER");
      clearInterval(this.intervalHandler);
      document.location.reload();
      return;
    }

    // All colisions and other
    if (Math.random() < 0.05) {
      var x = Math.ceil(Math.random() * this.canvas.width);
      this.enemies.push(new Enemy(this.ctx, x, 0));
    }

    if (Math.random() < 0.5) {
      var x = Math.ceil(Math.random() * this.canvas.width);
      this.stars.push(new Star(x, 0));
    }

    if (this.spacePressed) {
      this.bullets.push(new Bullet(this.bulletIndex, this));
      this.bulletIndex++;
    }

    // Handle Inactive Stars
    this.stars.forEach(element => {
      if (element.y > this.canvas.height) {
        element.active = false;
      }
    });
    this.stars = this.stars.filter(function(element) {
      return element.active;
    });

    // Handle Inactive Bullets
    this.bullets.forEach(element => {
      if (element.y < 0) {
        element.active = false;
      }
    });
    this.bullets = this.bullets.filter(function(element) {
      return element.active;
    });

    // Handle Inactive Enemies
    this.enemies.forEach(element => {
      if (element.y > this.canvas.height) {
        element.active = false;
      }
    });
    this.enemies = this.enemies.filter(function(element) {
      return element.active;
    });

    // Handle Bullets and Enemies colision
    this.bullets.forEach(bullet => {
      this.enemies.forEach(enemy => {
        if (this.colision(bullet, enemy, false)) {
          bullet.active = false;
          enemy.active = false;
          this.score.value += this.points;
        }
      });
    });

    // Handle Ship and Enemies colision
    this.enemies.forEach(enemy => {
      if (this.colision(this.space_ship, enemy, true)) {
        enemy.active = false;
        this.lives.value--;
        this.restart();
      }
    });
  }

  /**
   * @function restartGame
   * @description Restarts the game
   */
  restart() {
    this.space_ship.x = this.canvas.width / 2 - this.space_ship.width / 2;
    this.space_ship.y = this.canvas.height - this.space_ship.height;
    this.enemies = [];
    this.bullets = [];
    this.stars = [];
  }

  /**
   * @function colision
   * @description Checks collision between elements
   */
  colision(a, b, rect) {
    return rect
      ? a.x < b.x + b.width &&
          a.x + a.width > b.x &&
          a.y < b.y + b.height &&
          a.y + a.height > b.y
      : a.x < b.x + b.width && a.x > b.x && a.y < b.y + b.height;
  }

  keyDownHandler(e) {
    if (e.keyCode == this.keys_map.right) {
      this.rightPressed = true;
    }
    if (e.keyCode == this.keys_map.left) {
      this.leftPressed = true;
    }
    if (e.keyCode == this.keys_map.up) {
      this.upPressed = true;
    }
    if (e.keyCode == this.keys_map.down) {
      this.downPressed = true;
    }
    if (e.keyCode == this.keys_map.space) {
      this.spacePressed = true;
    }
  }

  keyUpHandler(e, game) {
    if (e.keyCode == this.keys_map.right) {
      this.rightPressed = false;
    }
    if (e.keyCode == this.keys_map.left) {
      this.leftPressed = false;
      //this.space_ship.x -= this.space_ship.speed;
    }
    if (e.keyCode == this.keys_map.up) {
      this.upPressed = false;
    }
    if (e.keyCode == this.keys_map.down) {
      this.downPressed = false;
    }
    if (e.keyCode == this.keys_map.space) {
      this.spacePressed = false;
    }
  }

  mouseMoveHandler(e) {
    var relativeX = e.clientX - this.canvas.offsetLeft;
    var relativeY = e.clientY;

    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.space_ship.x = relativeX - this.space_ship.width / 2;
    }

    if (relativeY > 0 && relativeY < this.canvas.height) {
      this.space_ship.y = relativeY - this.space_ship.height / 2;
    }
  }
}
