"use strict";

// Get Random Numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = getRandomInt(1, 5);
    this.width = 50;
    this.height = 85;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.image = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x > 600) {
        this.x = -100;
    } else {
        this.x += 100 * this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.image), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.image = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 85;
};


Player.prototype.update = function(dt) {
    return this.y;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.image), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {
    switch(keyCode) {
        case "up":
            if(this.y > -35) {
                this.y -= 85;
            }
        break;
        case "down":
            if(this.y < 390) {
                this.y += 85;
            }
        break;
        case "right":
            if(this.x < 400 ) {
                this.x += 100;
            }
        break;
        case "left":
            if(this.x > 0) {
                this.x -= 100;
            }
        break;
    }
};


// Now instantiate your objects.
var enemy_lineOne_1   = new Enemy(0, 50);
var enemy_lineOne_2   = new Enemy(-100, 50);
var enemy_lineTwo_1   = new Enemy(-150, 135);
// var enemy_lineTwo_2   = new Enemy(-200, 145, 3);
var enemy_lineThree_1 = new Enemy(-300, 220);
var enemy_lineThree_2 = new Enemy(-400, 220);
// Place all enemy objects in an array called allEnemies
// const allEnemies = [enemy_lineOne_1, enemy_lineOne_2, enemy_lineTwo_1, enemy_lineTwo_2, enemy_lineThree_1, enemy_lineThree_2];
const allEnemies = [enemy_lineOne_1, enemy_lineOne_2, enemy_lineTwo_1, enemy_lineThree_1, enemy_lineThree_2];
// Place the player object in a variable called player
const player = new Player(200, 390);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
