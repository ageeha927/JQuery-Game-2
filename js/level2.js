$(document).ready(function() {
    // Maze Size/Dimensions
    var mazeHeight = 760; // Adjusted maze height
    var mazeWidth = 800; // Adjusted maze width
    var music = new Audio("./audio/level2.mp3");
    $('body').keydown(function(){
        music.play()
        music.volume = 0.2
    })

    $('#backToStartButton').click(function() {
        window.location.href = 'index.html';
    });

    // Player starting position
    var playerX = 720; // Adjusted player starting position
    var playerY = 720; // Adjusted player starting position

    // Timer countdown
    var timeLeft = 40;
    var timerInterval;

    function startTimer() {
        timerInterval = setInterval(function() {
            timeLeft--;
            $('#timer').text('Time left: ' + timeLeft + 's');

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                loseGame();
            }
        }, 1000); // Update timer every second
    }

    function loseGame() {
        alert("Too Slow! You ran out of time.");
        calculateScore()
    }

    // Start the timer when the document is ready
    startTimer();

    // Movement Functionality for player
    function movePlayer(dx, dy, imageUrl) {
        let newX = playerX + dx;
        let newY = playerY + dy;

        // Verify new position is inside of maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight) {
            //Check to see if the new position is a wall or not
            if (!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')) {
                //We can move the player
                playerX = newX;
                playerY = newY;
                $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
                $('#player').css('background-image', 'url("' + imageUrl + '")');
            }

            //Check to see if the player reaches the end
            if(playerX === 680 && playerY === 360){
                clearInterval(timerInterval); // Stop the timer when the player wins
                alert("Congratulations! You beat level 2!");
                calculateScore()
                $('#nextLevelButton').show(); // Show next level button
            }

        }
    }

    // Keypress Event Listener
    $(document).keydown(function(e) {
        switch (e.which) {
            case 37: // Left arrow
                movePlayer(-40, 0, "./images/left.png");
                break;
            case 38: // Up arrow
                movePlayer(0, -40, "./images/up.png");
                break;
            case 39: // Right arrow
                movePlayer(40, 0, "./images/right.png");
                break;
            case 40: // Down arrow
                movePlayer(0, 40, "./images/down.png");
                break;
        }
    });

        // Calculate the score based on time taken
        function calculateScore() {
            var timeTaken = 40 - timeLeft; // Calculate time taken
            var score = 1000 - (timeTaken * 20); // Score calculation (adjust multiplier as needed)
            if (score < 0) {
                score = 0; // Score cannot be negative
            }
            alert("Your score: " + score);
        }

    // Create Maze Walls
    var wallCoordinates = [
        { top: 40, left: 40 },
    { top: 40, left: 80 },
    { top: 40, left: 120 },
    { top: 40, left: 160 },
    { top: 40, left: 200 },
    { top: 40, left: 240 },
    { top: 40, left: 280 },
    { top: 40, left: 360 },
    { top: 40, left: 320 },
    { top: 40, left: 400 },
    { top: 40, left: 440 },
    { top: 40, left: 480 },
    { top: 40, left: 520 },
    { top: 40, left: 560 },
    { top: 40, left: 440 },
    { top: 40, left: 600 },
    { top: 40, left: 640 },
    { top: 40, left: 680 },
    { top: 40, left: 720 },
    { top: 40, left: 760 },
        { top: 40, left: 760 },
        { top: 80, left: 760 },
        { top: 120, left: 760 },
        { top: 160, left: 760 },
        { top: 200, left: 760 },
        { top: 240, left: 760 },
        { top: 280, left: 760 },
        { top: 320, left: 760 },
        { top: 360, left: 760 },
        { top: 400, left: 760 },
        { top: 440, left: 760 },
        { top: 480, left: 760 },
        { top: 520, left: 760 },
        { top: 560, left: 760 },
        { top: 600, left: 760 },
        { top: 640, left: 760 },
        { top: 680, left: 760 },
        { top: 720, left: 760 },
        { top: 40, left: 0 },
        { top: 80, left: 0 },
        { top: 120, left: 0 },
        { top: 160, left: 0 },
        { top: 200, left: 0 },
        { top: 240, left: 0 },
        { top: 280, left: 0 },
        { top: 320, left: 0 },
        { top: 360, left: 0 },
        { top: 400, left: 0 },
        { top: 440, left: 0 },
        { top: 480, left: 0 },
        { top: 520, left: 0 },
        { top: 560, left: 0 },
        { top: 600, left: 0 },
        { top: 640, left: 0 },
        { top: 680, left: 0 },
        { top: 720, left: 0 },
        { top: 760, left: 0 },
        { top: 760, left: 40 },
        { top: 760, left: 80 },
        { top: 760, left: 120 },
        { top: 760, left: 160 },
        { top: 760, left: 200 },
        { top: 760, left: 240 },
        { top: 760, left: 280 },
        { top: 760, left: 360 },
        { top: 760, left: 320 },
        { top: 760, left: 400 },
        { top: 760, left: 440 },
        { top: 760, left: 480 },
        { top: 760, left: 520 },
        { top: 760, left: 560 },
        { top: 760, left: 440 },
        { top: 760, left: 600 },
        { top: 760, left: 640 },
        { top: 760, left: 680 },
        { top: 760, left: 720 },
        { top: 760, left: 760 },
        { top: 80, left: 160 },
        { top: 120, left: 80 },
        { top: 120, left: 120 },
        { top: 120, left: 160 },
        { top: 160, left: 80 },
        { top: 200, left: 80 },
        { top: 280, left: 80 },
        { top: 360, left: 80 },
        { top: 360, left: 40 },
        { top: 440, left: 80 },
        { top: 520, left: 80 },
        { top: 520, left: 40 },
        { top: 600, left: 80 },
        { top: 600, left: 40 },
        { top: 680, left: 80 },
        { top: 680, left: 120 },
        { top: 680, left: 160 },
        { top: 680, left: 200 },
        { top: 680, left: 240 },
        { top: 640, left: 160 },
        { top: 600, left: 160 },
        { top: 560, left: 160 },
        { top: 520, left: 160 },
        { top: 520, left: 120 },
        { top: 440, left: 120 },
        { top: 440, left: 160 },
        { top: 400, left: 160 },
        { top: 360, left: 160 },
        { top: 320, left: 160 },
        { top: 280, left: 160 },
        { top: 240, left: 160 },
        { top: 200, left: 160 },
        { top: 280, left: 120 },
        { top: 280, left: 160 },
        { top: 280, left: 200 },
        { top: 280, left: 240 },
        { top: 120, left: 240 },
        { top: 120, left: 280 },
        { top: 120, left: 320 },
        { top: 120, left: 360 },
        { top: 120, left: 400 },
        { top: 120, left: 440 },
        { top: 120, left: 480 },
        { top: 120, left: 520 },
        { top: 120, left: 600 },
        { top: 120, left: 640 },
        { top: 120, left: 680 },
        { top: 160, left: 240 },
        { top: 200, left: 240 },
        { top: 200, left: 200 },
        { top: 160, left: 320 },
        { top: 200, left: 320 },
        { top: 240, left: 320 },
        { top: 280, left: 320 },
        { top: 320, left: 320 },
        { top: 360, left: 320 },
        { top: 440, left: 320 },
        { top: 520, left: 320 },
        { top: 560, left: 320 },
        { top: 600, left: 320 },
        { top: 640, left: 320 },
        { top: 680, left: 320 },
        { top: 680, left: 360 },
        { top: 680, left: 400 },
        { top: 680, left: 480 },
        { top: 680, left: 520 },
        { top: 720, left: 480 },
        { top: 600, left: 520 },
        { top: 600, left: 480 },
        { top: 680, left: 640 },
        { top: 680, left: 680 },
        { top: 680, left: 720 },
        { top: 160, left: 680 },
        { top: 200, left: 680 },
        { top: 240, left: 680 },
        { top: 280, left: 680 },
        { top: 320, left: 680 },
        { top: 400, left: 680 },
        { top: 400, left: 720 },
        { top: 440, left: 680 },
        { top: 480, left: 680 },
        { top: 520, left: 680 },
        { top: 560, left: 680 },
        { top: 600, left: 680 },
        { top: 600, left: 600 },
        { top: 640, left: 600 },
        { top: 680, left: 600 },
        { top: 560, left: 600 },
        { top: 520, left: 600 },
        { top: 520, left: 560 },
        { top: 520, left: 520 },
        { top: 520, left: 480 },
        { top: 480, left: 480 },
        { top: 440, left: 480 },
        { top: 600, left: 440 },
        { top: 440, left: 440 },
        { top: 440, left: 400 },
        { top: 480, left: 400 },
        { top: 520, left: 400 },
        { top: 560, left: 400 },
        { top: 600, left: 400 },
        { top: 600, left: 400 },
        { top: 640, left: 400 },
        { top: 360, left: 520 },
        { top: 360, left: 560 },
        { top: 320, left: 480 },
        { top: 320, left: 640 },
        { top: 360, left: 640 },
        { top: 400, left: 640 },
        { top: 280, left: 480 },
        { top: 360, left: 480 },
        { top: 280, left: 520 },
        { top: 400, left: 560 },
        { top: 440, left: 560 },
        { top: 440, left: 600 },
        { top: 440, left: 640 },
        { top: 240, left: 520 },
        { top: 200, left: 520 },
        { top: 160, left: 520 },
        { top: 200, left: 560 },
        { top: 200, left: 600 },
        { top: 280, left: 600 },
        { top: 280, left: 640 },
        { top: 280, left: 400 },
        { top: 320, left: 400 },
        { top: 360, left: 400 },
        { top: 280, left: 440 },
        { top: 200, left: 400 },
        { top: 200, left: 440 },
        { top: 600, left: 240 },
        { top: 560, left: 240 },
        { top: 520, left: 240 },
        { top: 520, left: 280 },
        { top: 440, left: 240 },
        { top: 480, left: 240 },
        { top: 400, left: 240 },
        { top: 360, left: 240 },
    ];

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    // Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>');

    // Display initial timer value
    $('#maze').append('<div id="timer" style="position: absolute; top: 10px; right: 10px;">Time left: ' + timeLeft + 's</div>');
    
    // Add reset button
    $('#maze').append('<button id="resetButton" style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%);">Reset</button>');

    // Reset button click event
    $('#resetButton').click(function() {
            resetGame();
    });
    
    // Function to reset the game
    function resetGame() {
        clearInterval(timerInterval); // Clear the timer interval
        $('#timer').text('Time left: ' + timeLeft + 's'); // Reset timer display
        timeLeft = 40; // Reset timer
        startTimer(); // Start the timer again
        // Reset player position
        var playerX = 720; // Adjusted player starting position
        var playerY = 720;
        $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
        $('#nextLevelButton').hide(); // Hide next level button
    }
});

// Add next level button (initially hidden)
$('#maze').append('<button id="nextLevelButton" style="display: none; position: absolute; top: 820px; left: 50%; transform: translateX(-50%);">Next Level</button>');

$('#nextLevelButton').click(function() {
    window.location.href = "level3.html";
});