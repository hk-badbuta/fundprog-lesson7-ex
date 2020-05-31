/*
Programming Fundamentals - Lession 7 - Excerise
*/

// Global declaration
var BOARD_WIDTH = 8;
var BOARD_HEIGHT = 8;


/**
 * Setup the hover effect for the block
 * @date 2020-05-31
 * @param {JQuery} $theBlock the block instance
 */
function setupBlockHoverEffect($theBlock) {
    // Handle over effect
    $theBlock.hover(
        function () { //in
            $(this).removeClass('light-off').addClass('light-on');
        },
        function () { //out
            $(this).removeClass('light-on').addClass('light-off');
        });
}

/**
 * Create Line (or row)
 * @date 2020-05-31
 * @param {number} size The line size (int)
 * @returns {JQuery} The line
 */
function createLine(size) {
    // Not check the params, assume caller obey the spec

    // Create row container
    var $line = $('<div>').addClass('line');
    for (var i = 0; i < size; i++) {
        var $block = $('<div>').addClass('block');

        setupBlockHoverEffect($block);

        $line.append($block);
    }

    // Try to set the min-width by caluclation?

    return $line;
}

/**
 * Create the board
 * @date 2020-05-31
 * @param {number} width (int)
 * @param {number} height (int)
 * @returns {JQuery} the board
 */
function createBoard(width, height) {
    var $board = $('<div>').addClass('board');
    for (var j = 0; j < height; j++) {
        var r = createLine(width);
        $board.append(r);
    }
    return $board;
}

// The main program will be started here when the document is loaded and ready
$(document).ready(function () {

    var $canvas = $('#canvas');
    $canvas.append(createBoard(BOARD_WIDTH, BOARD_HEIGHT));
});


