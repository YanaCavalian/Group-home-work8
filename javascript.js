
span = document.querySelector('span');
span.style.color="blue";
setTimeout(() => { document.querySelector('span').innerHTML = "This site is the best";}, 4000);

const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
let currentSlide = 0;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderInner.children.length) {
        currentSlide = 0;
    }
    updateSlider();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderInner.children.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    const offset = currentSlide * slider.offsetWidth;
    sliderInner.style.transform = `translateX(-${offset}px)`;
}

setInterval(nextSlide, 4000);