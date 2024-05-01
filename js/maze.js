$(document).ready(function() {
    // Maze Size/Dimensions
    var mazeHeight = 760; // Adjusted maze height
    var mazeWidth = 800; // Adjusted maze width

    // Player starting position
    var playerX = 40; // Adjusted player starting position
    var playerY = 40; // Adjusted player starting position

    // Movement Functionality for player
    function movePlayer(dx, dy) {
        var newX = playerX + dx;
        var newY = playerY + dy;

        // Verify new position is inside of the maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight) {
            // Check to see if the new position is a wall or not
            if (!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')) {
                // We can move the player
                playerX = newX;
                playerY = newY;
                $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
            }

            // Check to see if the player reaches the end
            if (playerX === 70 && playerY === 720) { // Adjusted end position
                alert("Congratulations you made it through the maze");
            }
        }
    }

    // Keypress Event Listener
    $(document).keydown(function(e) {
        switch (e.which) {
            case 37: // Left arrow
                movePlayer(-40, 0);
                break;
            case 38: // Up arrow
                movePlayer(0, -40);
                break;
            case 39: // Right arrow
                movePlayer(40, 0);
                break;
            case 40: // Down arrow
                movePlayer(0, 40);
                break;
        }
    });

    // Create Maze Walls
    var wallCoordinates = [
        { top: 80, left: 80 },
        { top: 80, left: 120 },
        { top: 120, left: 120 },
        { top: 120, left: 160 },
        { top: 80, left: 200 },
        { top: 120, left: 200 },
        { top: 160, left: 200 },
        { top: 160, left: 240 },
        { top: 200, left: 240 },
        { top: 240, left: 240 },
        { top: 240, left: 280 },
        { top: 280, left: 280 },
        { top: 280, left: 320 },
        { top: 280, left: 360 },
        { top: 320, left: 360 },
        { top: 360, left: 360 },
        { top: 360, left: 320 },
        { top: 360, left: 280 },
        { top: 400, left: 280 },
        { top: 400, left: 320 },
        { top: 400, left: 360 },
        { top: 440, left: 360 },
        { top: 480, left: 360 },
        { top: 480, left: 400 },
        { top: 480, left: 440 },
        { top: 440, left: 440 },
        { top: 480, left: 480 },
        { top: 480, left: 520 },
        { top: 520, left: 520 },
        { top: 560, left: 520 },
        { top: 600, left: 520 },
        { top: 640, left: 520 },
        { top: 640, left: 560 },
        { top: 640, left: 600 },
        { top: 600, left: 600 },
        { top: 600, left: 640 },
        { top: 600, left: 680 },
        { top: 560, left: 680 },
        { top: 520, left: 680 },
        { top: 520, left: 720 },
        { top: 560, left: 720 },
        { top: 600, left: 720 },
        { top: 640, left: 720 },
        { top: 680, left: 720 },
        { top: 680, left: 680 },
        { top: 640, left: 680 },
        { top: 640, left: 640 },
        { top: 680, left: 640 },
        { top: 680, left: 600 },
        { top: 640, left: 600 },
        { top: 600, left: 560 },
        { top: 640, left: 560 },
        { top: 680, left: 560 },
        { top: 720, left: 560 },
        { top: 720, left: 600 },
        { top: 720, left: 640 },
        { top: 720, left: 680 },
        { top: 720, left: 720 }
    ];

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    // Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>');

});
