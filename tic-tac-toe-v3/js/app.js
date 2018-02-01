const startButton = document.querySelector('.button');
const startScreen = document.querySelector('#start');
const gameScreen = document.querySelector('#board');


startButton.addEventListener('click', () => {
	startScreen.style.display = 'none';
	gameScreen.style.display = ''; 
});