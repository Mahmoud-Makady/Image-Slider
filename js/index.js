let slider = Array.from(document.querySelectorAll('.container .slider-container .img'));


let activeSlide = 1;

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let stopBtn = document.getElementById('stop');
let playBtn = document.getElementById('play');


nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;
stopBtn.onclick = stopSlide;
playBtn.onclick = playSlide;

check();

let sliderInterval = setInterval(autoPlay, 2000);


function nextSlide() {
    activeSlide++;
    if (activeSlide > slider.length) {
        activeSlide = 1;
    }
    check();
}

function prevSlide() {
    activeSlide--;
    if (activeSlide < slider.length) {
        activeSlide = slider.length;
    }
    check();
}
function stopSlide() {
    clearInterval(sliderInterval);
}
function playSlide() {
    autoPlay();
}




function check() {
    removeActive();
    slider[activeSlide -1].classList.add('active');

}


function removeActive() {
    slider.forEach(function(slides) {
        slides.classList.remove('active')
    })
}

function autoPlay() {
clearInterval(sliderInterval);
sliderInterval = setInterval(nextSlide, 2000);
}