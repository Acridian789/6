const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl3.style.background = ('black');
    trafficLightEl1.style.background = ('green');
    removeEventListener('click', makeGreen);
    addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    removeEventListener('click', makeYellow);
    addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    removeEventListener('click', makeRed);
    addEventListener('click', makeGreen);
}

addEventListener('click', makeGreen);
