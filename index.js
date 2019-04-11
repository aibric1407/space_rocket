window.onload = function(e) {
  // Define canvas elements
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;
  var bulletIndex = 0;
  var fps = 60;
  var enemies = [];
  var stars = [];
  var points = 10;

  // Define flags for space ship movement
  var rightPressed = false;
  var leftPressed = false;
  var upPressed = false;
  var downPressed = false;
  var spacePressed = false;

  var keys_map = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    space: 32
  };

  /**
   * @class Ship
   * @description Space ship class. Contains all properties and methods for state and control of space ship
   */
  var Ship = function() {
    this.img = document.getElementById("space_ship");
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height;
    this.speed = 5;
    this.active = true;
    this.draw = function() {
      // draw space ship
      if (!this.active) {
        return;
      }
      if (rightPressed && space_ship.x < canvas.width - space_ship.width) {
        space_ship.x += space_ship.speed;
      }
      if (leftPressed && space_ship.x > 0) {
        space_ship.x -= space_ship.speed;
      }
      if (upPressed && space_ship.y > 0) {
        space_ship.y -= space_ship.speed;
      }
      if (downPressed && space_ship.y < canvas.height - space_ship.height) {
        space_ship.y += space_ship.speed;
      }
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  };

  /**
   * @class Enemy
   * @description Enemy class. Contains all properties and methods for state and control of enemies
   */
  var Enemy = function(x, y, speed) {
    this.img = document.getElementById("enemy");
    this.width = 25;
    this.height = 25;
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.active = true;
    this.draw = function() {
      if (!this.active) {
        return;
      }
      // draw enemy
      this.y += this.speed;
      //this.x += this.direction * this.speed;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  };

  var bullets = [];
  /**
   * @class Bullet
   * @description Bullet class. Contains all properties and methods for state and control of bullets
   * @param {number} id
   */
  var Bullet = function(id) {
    this.x = space_ship.x + space_ship.width / 2;
    this.y = space_ship.y;
    this.speed = 15;
    this.radius = 2;
    this.id = id;
    this.visible = true;
    this.active = true;
    this.draw = function() {
      if (!this.active) {
        return;
      }
      // handle exit from screen
      if (this.y < 0) {
        this.visible = false;
      }
      if (this.visible) {
        this.y -= this.speed;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
      }
    };
  };

  /**
   * @class Star
   * @description Star class. Contains all properties and methods for state and control of stars
   * @param {number} id
   */
  var Star = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.radius = 1;
    this.speed = 10;
    this.active = true;
    this.draw = function() {
      if (!this.active) {
        return;
      }
      // draw stars
      this.y += this.speed;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
    };
  };

  // Score object
  var score = {
    x: 20,
    y: 20,
    text: "SCORE: ",
    value: 0,
    draw: function() {
      // draw score
      ctx.font = "16px Arial";
      ctx.fillStyle = "#FFF";
      ctx.fillText(this.text + this.value, this.x, this.y);
    }
  };

  // Lives object
  var lives = {
    x: canvas.width - 100,
    y: 20,
    text: "LIVES: ",
    value: 3,
    draw: function() {
      // draw lives
      // draw score
      ctx.font = "16px Arial";
      ctx.fillStyle = "#FFF";
      ctx.fillText(this.text + this.value, this.x, this.y);
    }
  };

  /**
   * @function draw
   * @description Draws all elements on screen
   */
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    space_ship.draw();
    score.draw();
    lives.draw();
    bullets.forEach(element => {
      element.draw();
    });

    enemies.forEach(element => {
      element.draw();
    });

    stars.forEach(element => {
      element.draw();
    });
  }

  /**
   * @function update
   * @description Update game
   */
  function update() {
    if (!lives.value) {
      alert("GAME OVER");
      document.location.reload();
      return;
    }

    // All colisions and other
    if (Math.random() < 0.05) {
      var x = Math.ceil(Math.random() * canvas.width);
      enemies.push(new Enemy(x, 0));
    }

    if (Math.random() < 0.5) {
      var x = Math.ceil(Math.random() * canvas.width);
      stars.push(new Star(x, 0));
    }

    if (spacePressed) {
      bullets.push(new Bullet(bulletIndex));
      bulletIndex++;
    }

    // Handle Inactive Stars
    stars.forEach(element => {
      if (element.y > canvas.height) {
        element.active = false;
      }
    });
    stars = stars.filter(function(element) {
      return element.active;
    });

    // Handle Inactive Bullets
    bullets.forEach(element => {
      if (element.y < 0) {
        element.active = false;
      }
    });
    bullets = bullets.filter(function(element) {
      return element.active;
    });

    // Handle Inactive Enemies
    enemies.forEach(element => {
      if (element.y > canvas.height) {
        element.active = false;
      }
    });
    enemies = enemies.filter(function(element) {
      return element.active;
    });

    // Handle Bullets and Enemies colision
    bullets.forEach(bullet => {
      enemies.forEach(enemy => {
        if (colision(bullet, enemy, false)) {
          bullet.active = false;
          enemy.active = false;
          score.value += points;
        }
      });
    });

    // Handle Ship and Enemies colision
    enemies.forEach(enemy => {
      if (colision(space_ship, enemy, true)) {
        enemy.active = false;
        lives.value--;
        restartGame();
      }
    });
  }

  /**
   * @function restartGame
   * @description Restarts the game
   */
  var restartGame = function() {
    space_ship.x = canvas.width / 2 - space_ship.width / 2;
    space_ship.y = canvas.height - space_ship.height;
    enemies = [];
    bullets = [];
    stars = [];
  };

  /**
   * @function colision
   * @description Checks collision between elements
   */
  var colision = function(a, b, rect) {
    return rect
      ? a.x < b.x + b.width &&
          a.x + a.width > b.x &&
          a.y < b.y + b.height &&
          a.y + a.height > b.y
      : a.x < b.x + b.width && a.x > b.x && a.y < b.y + b.height;
  };

  var space_ship = new Ship();

  // Handle movements
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  //document.addEventListener("mousemove", mouseMoveHandler, false);

  function keyDownHandler(e) {
    if (e.keyCode == keys_map.right) {
      rightPressed = true;
      // space_ship.x += space_ship.speed;
    }
    if (e.keyCode == keys_map.left) {
      leftPressed = true;
      // space_ship.x -= space_ship.speed;
    }
    if (e.keyCode == keys_map.up) {
      upPressed = true;
      // space_ship.y -= space_ship.speed;
    }
    if (e.keyCode == keys_map.down) {
      downPressed = true;
      // space_ship.y += space_ship.speed;
    }
    if (e.keyCode == keys_map.space) {
      spacePressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode == keys_map.right) {
      rightPressed = false;
      // space_ship.x += space_ship.speed;
    }
    if (e.keyCode == keys_map.left) {
      leftPressed = false;
      space_ship.x -= space_ship.speed;
    }
    if (e.keyCode == keys_map.up) {
      upPressed = false;
      // space_ship.y -= space_ship.speed;
    }
    if (e.keyCode == keys_map.down) {
      downPressed = false;
      // space_ship.y += space_ship.speed;
    }
    if (e.keyCode == keys_map.space) {
      // space_ship.fire = false;
      spacePressed = false;
    }
  }

  function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    var relativeY = e.clientY;

    if (relativeX > 0 && relativeX < canvas.width) {
      space_ship.x = relativeX - space_ship.width / 2;
    }

    if (relativeY > 0 && relativeY < canvas.height) {
      space_ship.y = relativeY - space_ship.height / 2;
    }
  }

  setInterval(function() {
    update();
    draw();
  }, 1000 / fps);
};
