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
            if (playerX === 720 && playerY === 720) { // Adjusted end position
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
        { top: 0, left: 40 },
        { top: 0, left: 80 },
        { top: 0, left: 120 },
        { top: 0, left: 160 },
        { top: 0, left: 200 },
        { top: 0, left: 240 },
        { top: 0, left: 280 },
        { top: 0, left: 360 },
        { top: 0, left: 320 },
        { top: 0, left: 400 },
        { top: 0, left: 440 },
        { top: 0, left: 480 },
        { top: 0, left: 520 },
        { top: 0, left: 560 },
        { top: 0, left: 440 },
        { top: 0, left: 600 },
        { top: 0, left: 640 },
        { top: 0, left: 680 },
        { top: 0, left: 720 },
        { top: 0, left: 760 },
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
    ];

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    // Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>');

});
