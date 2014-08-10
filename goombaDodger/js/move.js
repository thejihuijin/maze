var imgObj = null;
var position = 0;
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';
    start('img/mario.png', 'rockimg');
}
function moveRight(){
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
}

window.onload =init;
document.addEventListener('keydown', function(event) {
    var arrow = false;
    switch(event.which) {
        case 37: // left
        moveLeft();
        arrow = true;
        break;

        case 39: // right
        //alert('right clicked');
        moveRight();
        arrow = true;
        break;

    }
    if (arrow) event.preventDefault(); // prevent the default action (scroll / move caret)
}, true);

