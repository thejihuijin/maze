var numrocks=0
function showRock(src,id) {
    id += numrocks
    numrocks++;
    var position = 0;
    var background= document.getElementById('background');
    var maxDist = parseInt(background.style.height) - 100;
    var img = document.createElement("img");
    img.src = src;
    img.id = id; 
    img.style.position= 'absolute'; 
    img.style.left = Math.floor((Math.random() * 3))*100 + 'px';
    img.style.top = '0px'; 
    img.style.width = '100px';
    // This next line will just add it to the <body> tag
    document.getElementById('background').appendChild(img);

    var fallingimg = document.getElementById(id);
    function fall() {
        if (position >= maxDist) {
            clearInterval(fallingobj)
            var element = document.getElementById(id);
            element.parentNode.removeChild(element);
        } else {
            fallingimg.style.top = parseInt(fallingimg.style.top) + 1 + 'px';
            position += 1;
        }
    }
    var fallingobj = setInterval(fall, 10);
}
