
const images = [
    "00.jpg",
    "01.jpg",
    "02.jpg"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
const body = document.querySelector("body");
//bgImage.src = `img/${chosenImage}`;

const JPG = `img/${chosenImage}`;
const URL = "url("+JPG+")"

body.style.backgroundImage = URL;