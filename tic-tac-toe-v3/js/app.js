
// Variables for game start

const startButton = document.querySelector('.button');
const startScreen = document.querySelector('#start');
const gameScreen = document.querySelector('#board');

// Creates a player object

function Players (n) {
	this.name = name;
	this.isActive = false;
	this.numMoves = [];
}

let firstPlayer = new Players('o');
let secondPlayer = new Players('x');

// function to determine which player goes first

function goesFirst () {
	let randInt = Math.floor(Math.random() * 2) + 1;
	if (randInt === 1) {
		player1.classList.add('active');
		firstPlayer.isActive = true;
	} else {
		player2.classList.add('active');
		secondPlayer.isActive = true;
	}
}

// Function to change turns

function switchTurn () {
	if (secondPlayer.isActive) {
		player1.classList.remove('active');
		player2.classList.add('active');
	} else {
		player2.classList.remove('active');
		player1.classList.add('active');
	}
}

// Event listener to begin game when the user clicks the start button

startButton.addEventListener('click', () => {
	startScreen.style.display = 'none';
	gameScreen.style.display = ''; 
	goesFirst();
});

// Gives functionality to hovering over a box or clicking on a box

const boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('mouseenter', (e) => {
		if (boxes[i].classList.contains('box-filled-1') || boxes[i].classList.contains('box-filled-2')) {
			boxes[i].removeEventListener('mouseenter', e);
		}
		if (firstPlayer.isActive) {
			boxes[i].style.backgroundImage = "url('img/o.svg')"
		} else if (secondPlayer.isActive) {
			boxes[i].style.backgroundImage = "url('img/x.svg')"
		}
	});

	boxes[i].addEventListener('mouseleave', (e) => {
		boxes[i].style.backgroundImage = "";
	});

	boxes[i].addEventListener('click', (e) => {
		if (firstPlayer.isActive) {
			boxes[i].classList.add('box-filled-1');
			firstPlayer.numMoves.push(boxes[i].id);
			boxes[i].removeEventListener('click', e);
			firstPlayer.isActive = false;
			secondPlayer.isActive = true;
		} else if (secondPlayer.isActive) {
			boxes[i].classList.add('box-filled-2');
			secondPlayer.numMoves.push(boxes[i].id);
			boxes[i].removeEventListener('click', e);
			secondPlayer.isActive = false;
			firstPlayer.isActive = true;
		}
		switchTurn();
	});
}





























