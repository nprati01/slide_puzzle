const  rows = 3; //
const  columns = 3;

var currTile; //refrences the tile you click to switch with
var otherTile; //blank tile, the tile you want to switch with

var turns = 0; // turn counter

// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9" ]; //the name of the pieces
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3" ]

window.onload = function () {
    for (let r =0; r < rows; r++) {
        for ( let c =0; c < columns; c++) {

            //assigns an image to a space on the board
            let title = document.createElement("img");
            title.id = r.toString() + "-" + c.toString();
            title.src = imgOrder.shift() + ".jpg";
            //displays the image on the board



            //DRAG FUNCTIONALITY
            title.addEventListener("dragstart", dragStart); // click an image to drag
            title.addEventListener("dragover", dragOver); // while you move an image around while clicked
            title.addEventListener("dragenter", dragEnter); // dragging an image onto another one
            title.addEventListener("dragleave", dragLeave); // leaving the image
            title.addEventListener("drop", dragDrop); // drag an image and you drop the image or release the mouse
            title.addEventListener("dragend", dragEnd); // the swapping of the tile

            document.getElementById("board").append(title);
        }
    }

    function dragStart() {
        currTile = this; // this refers to the img being dragged
    }
    function dragOver(e) {
        e.preventDefault();
    }
    function dragEnter(e) {
        e.preventDefault
    }
    function dragLeave() {

    }
    function dragDrop() {
        otherTile = this; // refers to the img tile being dropped on
    }

    function dragEnd() {
        if (!otherTile.src.includes("3.jpg")) {
            return;
        }
        let currCoords = currTile.id.split("-");
        let r = parseInt(currCoords[0]);
        let c = parseInt(currCoords[1]);

        let otherCoords = otherTile.id.split("-");
        let r2 = parseInt(otherCoords[0]);
        let c2 = parseInt(otherCoords[1]);

        let moveLeft = r == r2 && c2 == c-1;
        let moveRight = r == r2 && c2 == c+1;

        let moveUp = c == c2 && r2 == r-1;
        let moveDown = c == c2 && r2 == r+1;

        let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

        if(isAdjacent) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;

            currTile.src = otherImg
            otherTile.src = currImg

            turns += 1
            document.getElementById("turns").innerText = turns;
        }


    }
}
