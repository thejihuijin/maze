var imgObj = null;
var position = 0;
/* // moved to css file for goombaDodger
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';
}*/
/*function moveRight(){
    if (position < 2) {
        imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
        position++;
    }
}
function moveLeft(){
    if (position > 0) {
        imgObj.style.left = parseInt(imgObj.style.left) - 100 + 'px';
        position--;
    }
}*/

function moveRight() {
    // jquery to grab those of the class, moveable
    $(".moveable").each(function(index, element) {
        // element is a node with the desired class name
        if (checkRight(element)) {
            // initializes the style.left field so it can be changed
            element.style.left = document.defaultView.getComputedStyle(element).left;
            element.style.left = parseInt(element.style.left) + 100 + 'px';
        }
    });
}
function checkRight(element) {
    var pdiv = element.parentNode;
    var pwidth = parseInt(pdiv.style.width);
    var ePosition = parseInt(element.width) + element.offsetLeft;
    return pwidth > ePosition; 
}

function moveLeft() {
    // jquery to grab those of the class, moveable
    $(".moveable").each(function(index, element) {
        // element is a node with the desired class name
        if (checkLeft(element)) {
            // initializes the style.left field so it can be changed
            element.style.left = document.defaultView.getComputedStyle(element).left;
            element.style.left = parseInt(element.style.left) - 100 + 'px';
        }
    });
}
function checkLeft(element) {
    return element.offsetLeft > 0; 
}





//window.onload = init;
document.addEventListener('keydown', function(event) {
    var arrow = false;
    switch(event.which) {
        case 37: // left
        moveLeft();
        arrow = true;
        break;

        case 39: // right
        moveRight();
        arrow = true;
        break;

    }
    if (arrow) event.preventDefault(); // prevent the default action (scroll / move caret)
}, true);

