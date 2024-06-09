var slideImg = document.getElementById("slideImg");

var images = new Array(
    "2.webp",
    "3.jpg",
    "4.webp",
    "5.webp",
    
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',8000);
}