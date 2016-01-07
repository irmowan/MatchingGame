var theLeftSide = document.getElementById("leftSide");
var numberOfFaces = 5; // default number

function generateFaces() {
    var img_node = document.createElement("img");
    var leftSide_node = document.getElementById("leftSide");
    img_node.src = "smile.png";
    img_node.style.top = Math.floor(Math.random() * 400) + "px";
    img_node.style.left = Math.floor(Math.random() * 400) + "px";
    leftSide_node.appendChild(img_node);
}

function cloneFaces() {
    var rightSide_node = document.getElementById("rightSide");
    var cloned_node = document.getElementById("leftSide").cloneNode(true);
    cloned_node.removeChild(cloned_node.lastChild);
    rightSide_node.appendChild(cloned_node);
}

for (var i = 0; i < 5; i++) {
    generateFaces();
}

cloneFaces();
