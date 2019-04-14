## Space Rocket Canvas game

Author: Adnan Ibric

#### Installation

1. Clone the repository

```sh
$ git clone https://github.com/aibric1407/space_rocket.git
```

2. Install dependencies

```sh
$ cd space_rocket
$ npm install
```

3. Run the app

```sh
$ npm run start
```

You will see the output:

```
Project is running at http://localhost:8080/

```

![Game](game.png)

#### Description

Game consists from:

- Space ship which can move to every direction in 2D and can shoot the bullets
- Asteroids which are generated randomly and falling from top to bottom of screen

Objective is not to collide with asteroids and destroy as much asteroids as you can.

For each destroyed asteroid user gets 10 points.

Each collision will take one life out of three.

When user reaches 0 lives game is over.
