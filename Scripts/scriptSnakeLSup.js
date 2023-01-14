// gamePixel is the pixels on horizontal or vertical axis of the game board square
const gamePixel = 32;
const squareGamePixel = Math.pow(gamePixel, 2);

let eatenFood = 0;
let level = 1;


// game board
const gameContainer = document.getElementById("gameContainer");

const createGameBoardPixels = () => {
// populate the #gameContainer div with small div's representing game pixels
	for (let i = 1; i <= squareGamePixel; ++i) {
		gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
	}
};


// this variable always holds the updated array of game pixels created by createGameBoardPixels() 
const gameBoardPixels = document.getElementsByClassName("gameBoardPixel");

// food for snake
let currentFoodPostion = 0;
const createFood = () => {
// remove previous food
	gameBoardPixels[currentFoodPostion].classList.remove("food");

// create new food
	currentFoodPostion = Math.random();
	currentFoodPostion = Math.floor(
    currentFoodPostion * squareGamePixel
	);
	gameBoardPixels[currentFoodPostion].classList.add("food");
};


// snake
// direction codes (Keyboard key codes for arrow keys)
const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

// set snake direction initially to right
let snakeCurrentDirection = RIGHT_DIR;

const changeDirection = newDirectionCode => {
// change the direction of the snake
	if (newDirectionCode == snakeCurrentDirection) return;

	if (newDirectionCode == LEFT_DIR && snakeCurrentDirection != RIGHT_DIR) {
		snakeCurrentDirection = newDirectionCode;
	} else if (newDirectionCode == UP_DIR && snakeCurrentDirection != DOWN_DIR) {
		snakeCurrentDirection = newDirectionCode;
	} else if (
		newDirectionCode == RIGHT_DIR &&
		snakeCurrentDirection != LEFT_DIR
	) {
		snakeCurrentDirection = newDirectionCode;
	} else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection != UP_DIR) {
		snakeCurrentDirection = newDirectionCode;
	}
};


// let the starting position of the snake be at the middle of game board
let currentSnakeHeadPosition = squareGamePixel / 2;

// initial snake length
let snakeLength = 200;

// move snake continously by calling this function repeatedly
const moveSnake = () => {
	switch (snakeCurrentDirection) {
		case LEFT_DIR:
			--currentSnakeHeadPosition;
			const isSnakeHeadAtLastGameBoardPixelTowardsLeft =
				currentSnakeHeadPosition % gamePixel == gamePixel - 1 ||
				currentSnakeHeadPosition < 0;
			if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
				currentSnakeHeadPosition = currentSnakeHeadPosition + gamePixel;
			}
		break;
		case UP_DIR:
			currentSnakeHeadPosition = currentSnakeHeadPosition - gamePixel;
			const isSnakeHeadAtLastGameBoardPixelTowardsUp =
				currentSnakeHeadPosition < 0;
			if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
				currentSnakeHeadPosition =
				currentSnakeHeadPosition + squareGamePixel;
			}
		break;
		case RIGHT_DIR:
			++currentSnakeHeadPosition;
			const isSnakeHeadAtLastGameBoardPixelTowardsRight =
				currentSnakeHeadPosition % gamePixel == 0;
			if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
				currentSnakeHeadPosition = currentSnakeHeadPosition - gamePixel;
			}
		break;
		case DOWN_DIR:
			currentSnakeHeadPosition = currentSnakeHeadPosition + gamePixel;
			const isSnakeHeadAtLastGameBoardPixelTowardsDown =
				currentSnakeHeadPosition > squareGamePixel - 1;
			if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
				currentSnakeHeadPosition =
				currentSnakeHeadPosition - squareGamePixel;
			}
		break;
		default:
		break;
	}

	let nextSnakeHeadPixel = gameBoardPixels[currentSnakeHeadPosition];

// kill snake if it bites itself
	if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
// stop moving the snake
		clearInterval(moveSnakeInterval);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval2);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval3);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval4);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval5);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval6);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval7);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval8);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval9);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval10);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval11);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval12);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval13);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval14);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval15);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval16);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
		clearInterval(moveSnakeInterval17);
			document.querySelector(".displayGameOver").style.display = "block";
			document.querySelector(".displayGameOver").innerText = "Game Over";
	}

	nextSnakeHeadPixel.classList.add("snakeBodyPixel");

	setTimeout(() => {
		nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
	}, snakeLength);
	
	
	if (currentSnakeHeadPosition == currentFoodPostion) {
// update total food ate
    eatenFood++;
	
	if (eatenFood == 5) {
		level+=1;
		clearInterval(moveSnakeInterval);
		moveSnakeInterval2 = setInterval(moveSnake, 190);
	}
	if (eatenFood == 10) {
		level+=1;
		clearInterval(moveSnakeInterval2);
		moveSnakeInterval3 = setInterval(moveSnake, 180);
	}
	if (eatenFood == 15) {
		level+=1;
		clearInterval(moveSnakeInterval3);
		moveSnakeInterval4 = setInterval(moveSnake, 170);
	}
	if (eatenFood == 20) {
		level+=1;
		clearInterval(moveSnakeInterval4);
		moveSnakeInterval5 = setInterval(moveSnake, 160);
	}
	if (eatenFood == 25) {
		level+=1;
		clearInterval(moveSnakeInterval5);
		moveSnakeInterval6 = setInterval(moveSnake, 150);
	}
	if (eatenFood == 30) {
		level+=1;
		clearInterval(moveSnakeInterval6);
		moveSnakeInterval7 = setInterval(moveSnake, 140);
	}
	if (eatenFood == 35) {
		level+=1;
		clearInterval(moveSnakeInterval7);
		moveSnakeInterval8 = setInterval(moveSnake, 130);
	}
	if (eatenFood == 40) {
		level+=1;
		clearInterval(moveSnakeInterval8);
		moveSnakeInterval9 = setInterval(moveSnake, 120);
	}
	if (eatenFood == 45) {
		level+=1;
		clearInterval(moveSnakeInterval9);
		moveSnakeInterval10 = setInterval(moveSnake, 110);
	}
	if (eatenFood == 50) {
		level+=1;
		clearInterval(moveSnakeInterval10);
		moveSnakeInterval11 = setInterval(moveSnake, 100);
	}
	if (eatenFood == 55) {
		level+=1;
		clearInterval(moveSnakeInterval11);
		moveSnakeInterval12 = setInterval(moveSnake, 90);
	}
	if (eatenFood == 60) {
		level+=1;
		clearInterval(moveSnakeInterval12);
		moveSnakeInterval13 = setInterval(moveSnake, 80);
	}
	if (eatenFood == 65) {
		level+=1;
		clearInterval(moveSnakeInterval13);
		moveSnakeInterval14 = setInterval(moveSnake, 70);
	}
	if (eatenFood == 70) {
		level+=1;
		clearInterval(moveSnakeInterval14);
		moveSnakeInterval15 = setInterval(moveSnake, 60);
	}
	if (eatenFood == 75) {
		level+=1;
		clearInterval(moveSnakeInterval15);
		moveSnakeInterval16 = setInterval(moveSnake, 50);
	}
	if (eatenFood == 80) {
		level+=1;
		clearInterval(moveSnakeInterval16);
		moveSnakeInterval17 = setInterval(moveSnake, 40);
	}
	
    // update in scoreBoard
    document.getElementById("pointsEarned").innerHTML = eatenFood;
	document.getElementById("reachedLevel").innerHTML = level;
	
    // increase Snake length
    snakeLength = snakeLength + 100;
    createFood();
	}
	
	// highscore
	var highscore = localStorage.getItem("highscore");
	var highscore_span = document.getElementById("highscoreDisplay");

	if(highscore !== null){
		if (eatenFood > highscore) {
			localStorage.setItem("highscore", eatenFood);      
		}
	}else{
		localStorage.setItem("highscore", eatenFood);
	}

	highscore_span.innerHTML = highscore;
  
};


// call functions to run the game
// create game board pixels
createGameBoardPixels();

// create initial food
createFood();

// move snake
var moveSnakeInterval = setInterval(moveSnake, 200); // 200 snake speed, less is faster


// call change direction function on keyboard key-down event
addEventListener("keydown", e => changeDirection(e.keyCode));

// on screen controller
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection(LEFT_DIR);
rightButton.onclick = () => changeDirection(RIGHT_DIR);
upButton.onclick = () => changeDirection(UP_DIR);
downButton.onclick = () => changeDirection(DOWN_DIR);