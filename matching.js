var numberOfFaces = 5;
var leftSide_node = document.getElementById("leftSide");
var rightSide_node = document.getElementById("rightSide");
var body_node = document.getElementsByTagName("body")[0];
var levels = 0;

function generateFace() {
    var img_node = document.createElement("img");
    img_node.src = "smile.png";
    img_node.style.top = Math.floor(Math.random() * 400) + "px";
    img_node.style.left = Math.floor(Math.random() * 400) + "px";
    leftSide_node.appendChild(img_node);
}

function generateFaces(times) {
    for (var i = 0; i < times; i++) {
        generateFace();
    }
}

function cloneFaces() {
    var cloned_node = document.getElementById("leftSide").cloneNode(true);
    cloned_node.removeChild(cloned_node.lastChild);
    rightSide_node.appendChild(cloned_node);
}

function clearFaces() {
    while (leftSide_node.firstChild)
        leftSide_node.removeChild(leftSide_node.firstChild);
    while (rightSide_node.firstChild)
        rightSide_node.removeChild(rightSide_node.firstChild);
}

function nextLevel(event) {
    console.log("Pass one level.");
    event.stopPropagation();
    levels++;
    numberOfFaces += 5;
    clearFaces();
    generateFaces(numberOfFaces);
    cloneFaces();
    leftSide_node.lastChild.onclick = nextLevel;
}

function gameOver() {
    leftSide_node.lastChild.onclick = null;
    body_node.onclick = null;
    alert("Game Over! " + "You have passed " + levels + " level(s)!");
}

// Main part
generateFaces(numberOfFaces);
cloneFaces();
leftSide_node.lastChild.onclick = nextLevel;
body_node.onclick = gameOver;
