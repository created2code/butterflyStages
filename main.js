//create a variable to store query selector

var slider_img = document.querySelector('.slider-img');
var description = document.querySelectorAll('.message');

//create a variable that stores array of images
var images = ['stage1.png', 'stage2.png','stage3.png','stage4.png'];


var i = 0; //Current Image Index

//create prev and next functions

function prev(){
    if(i<=0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'assest/imgs/' +images[i]);
}

