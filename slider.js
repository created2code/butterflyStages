//create a variable to store query selector

let slides = document.querySelectorAll('.slide');

let index = 0;

//Next Function

function next(){
    slides[index].classList.remove('activo');
    index = (index + 1) % slides.length;
    slides[index].classList.add('activo');
}

//Prev Function

function prev(){
    slides[index].classList.remove('activo');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('activo');
}