const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img")  // HTML element 생성\
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);  // HTML에 bgImage 추가