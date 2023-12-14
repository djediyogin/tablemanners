// game.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Game page loaded and parsed');

    // Get the game container
    var gameContainer = document.getElementById('gameContainer');

    // Create a simple game
    var gameContent = document.createElement('p');
    gameContent.textContent = 'This is a simple game. Click the button to play!';
    gameContainer.appendChild(gameContent);

    // Create a play button
    var playButton = document.createElement('button');
    playButton.textContent = 'Play';
    gameContainer.appendChild(playButton);

    // Add event listener to the play button
    playButton.addEventListener('click', function() {
        // Generate a random number
        var randomNumber = Math.floor(Math.random() * 10) + 1;

        // Display the random number
        var result = document.createElement('p');
        result.textContent = 'You rolled a ' + randomNumber + '!';
        gameContainer.appendChild(result);
    });
});
