var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
    displaySlides(slide_index += n);
}
function currentSlide(n) {
    displaySlides(slide_index = n);
}
function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName('slide');
    if(n > slides.length){
        slide_index = 1;
    }
    if(n < 1){
        slide_index = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block"
}

var cursor = document.getElementById('cursor');
var cursor2 = document.getElementById('cursor2');
document.addEventListener('mousemove', function(e){
   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
});